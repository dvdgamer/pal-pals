import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Friend } from "../../types/types";
import Collapsible from "react-native-collapsible";
import ConfirmationPopUp from "./ConfirmationPopUp";
import { fetchFriendsList, deleteFriend } from "../../services/api";

export default function Accordion({ userId }: { userId: number }): JSX.Element {
  const [data, setData] = useState<{
    friends: Friend[];
  } | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [activeSections, setActiveSections] = useState<number[]>([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [friendToDelete, setFriendToDelete] = useState<Friend | null>(null);

  const fetchData = async () => {
    try {
      const result: Friend[] = await fetchFriendsList(userId);
      setData({ friends: result });
      console.log("data :", data)
    } catch (err) {
      setError(err as Error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userId]);

  const handleDeleteFriend = async () => {
    if (friendToDelete) {
      await deleteFriend(userId, friendToDelete.id);
      setPopupVisible(false);
      setFriendToDelete(null);
      fetchData(); // Refresh the list after deletion
    }
  };

  const toggleSection = (index: number) => {
    setActiveSections((prevActiveSections) =>
      prevActiveSections.includes(index)
        ? prevActiveSections.filter((sectionIndex) => sectionIndex !== index)
        : [...prevActiveSections, index]
    );
  };

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  if (!data) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingVertical: 20,
        marginBottom: 40,
      }}
    >
      <>
        {console.log("data", data)}
      </>
      {data.friends.map((friend: Friend, index: number) => (
        <View key={friend.id} style={styles.section}>
          <TouchableOpacity onPress={() => toggleSection(index)}>
            <Text style={styles.sectionTitle}>{friend.name}</Text>
          </TouchableOpacity>
          <Collapsible collapsed={!activeSections.includes(index)}>
            <View style={styles.sectionContent}>
              {/* <DeleteFriendButton friendId={friend.id} userId={userId} /> */}
              <Text>
                Date of Birth:{" "}
                {new Date(friend.dateOfBirth).toLocaleDateString()}
              </Text>
              {/* <Text>Time Elapsed: 2 months</Text> */}
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => {
                  setFriendToDelete(friend);
                  setPopupVisible(true);
                }}
              >
                <Text>Delete Friend :'(</Text>
              </TouchableOpacity>
            </View>
          </Collapsible>
          <ConfirmationPopUp
            visible={popupVisible}
            message="Are you certain?"
            confirmText="Delete"
            onConfirm={handleDeleteFriend}
            onCancel={() => {
              setPopupVisible(false);
              setFriendToDelete(null);
            }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

// STYLES =====================================================================

const styles = StyleSheet.create({
  section: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    width: "90%",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionContent: {
    fontSize: 16,
    paddingTop: 10,
  },
  deleteButton: {
    alignSelf: "flex-end",
    padding: 5,
    margin: 5,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
  },
});
