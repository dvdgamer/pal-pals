import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Collapsible from "react-native-collapsible";
import { fetchFriendsList } from "../services/api";
import { Friend } from "../types";

export default function Accordion({ userId }: { userId: number }): JSX.Element {
  const [data, setData] = useState<{
    friends: Friend[];
  } | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [activeSections, setActiveSections] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result: Friend[] = await fetchFriendsList(userId);
        // [{id: 4, name: 'Alice Johnson', dateOfBirth: '1994-03-02T23:00:00.000Z', userId: 8}]

        setData({ friends: result });
        result.map((friend: Friend, index: number) => (
          console.log("friend :", friend)
        ));
      } catch (err) {
        setError(err as Error);
      }
    };

    fetchData();
  }, [userId]);

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
      {data.friends.map((friend: Friend, index: number) => (
        <View key={friend.id} style={styles.section}>
          <TouchableOpacity onPress={() => toggleSection(index)}>
            <Text style={styles.sectionTitle}>{friend.name}</Text>
          </TouchableOpacity>
          <Collapsible collapsed={!activeSections.includes(index)}>
            <View style={styles.sectionContent}>
              <Text>
                Date of Birth:{" "}
                {new Date(friend.dateOfBirth).toLocaleDateString()}
              </Text>
              <Text>Time Elapsed: 2 months</Text>
            </View>
          </Collapsible>
        </View>
      ))}
    </ScrollView>
  );
}

// STYLES ////////////////////////////////////////////////////////////
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
});
