import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Collapsible from "react-native-collapsible";
import { fetchUserData } from "../services/api";

const Accordion = ({ userId }: { userId: number }) => {
  const [data, setData] = useState<{
    user: { name: string };
    friends: {
      dateOfBirth: string | number | Date;
      id: number;
      name: string;
    }[];
  } | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [activeSections, setActiveSections] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("starting Accordion's data fetch")
        const result = await fetchUserData(userId);
        console.log('accordions result:', result)
        setData(result);
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
    return <Text>Error: {(error as any).message}</Text>;
  }

  if (!data) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {data.friends.map((friend, index) => (
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
      </View>
    </ScrollView>
  );
};

export default Accordion;

// STYLES ////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
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
