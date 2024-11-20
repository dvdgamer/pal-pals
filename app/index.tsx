import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Panel from './components/Panels/Panel';
import { Friend } from '../types/types';
import { StatusBar } from 'expo-status-bar';
import { fetchFriendsList } from '../services/api';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const [upcomingBirthdaysList, setUpcomingBirthdaysList] = useState<Friend[]>([]);

  // TODO Make this its own component in the BirthdatePanel.tsx
  useEffect(() => {
    const fetchAndProcessFriends = async () => {
      const userData = await fetchFriendsList(8);
      console.log(userData);
      const friendsList = userData;
      console.log("friendsList", friendsList);
      const today = new Date();

      const upcomingBirthdays = friendsList.filter((friend: Friend) => {
        const birthdate = new Date(friend.dateOfBirth);
        const nextBirthday = new Date(
          today.getFullYear(),
          birthdate.getMonth(),
          birthdate.getDate()
        );

        if (nextBirthday < today) {
          nextBirthday.setFullYear(today.getFullYear() + 1);
        }

        const diffInDays = Math.ceil(
          (nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
        );

        return diffInDays <= 45;
      });

      setUpcomingBirthdaysList(upcomingBirthdays);
    };

    fetchAndProcessFriends();
  }, []);

  const renderItem = ({ item }: { item: Friend }) => {
    const today = new Date();
    const birthdate = new Date(item.dateOfBirth);
    const nextBirthday = new Date(
      today.getFullYear(),
      birthdate.getMonth(),
      birthdate.getDate()
    );

    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const diffInDays = Math.ceil(
      (nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );

    return (
      <View key={item.id} style={styles.friendContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.daysTillBirthday}>{diffInDays} days until birthday</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <Panel
            panelTitle="Around the corner"
            list={upcomingBirthdaysList}
            renderItem={renderItem}
            innerView={
              <View>
                {upcomingBirthdaysList.map((friend: Friend) => {
                  const today = new Date();
                  const birthdate = new Date(friend.dateOfBirth);
                  const nextBirthday = new Date(
                    today.getFullYear(),
                    birthdate.getMonth(),
                    birthdate.getDate()
                  );

                  if (nextBirthday < today) {
                    nextBirthday.setFullYear(today.getFullYear() + 1);
                  }

                  const diffInDays = Math.ceil(
                    (nextBirthday.getTime() - today.getTime()) /
                      (1000 * 60 * 60 * 24)
                  );

                  return (
                    <View key={friend.id} style={styles.friendContainer}>
                      <Text style={styles.title}>
                        {friend.name}
                      </Text>
                      <Text style={styles.daysTillBirthday}>{diffInDays} days until birthday</Text>
                    </View>
                  );
                })}
              </View>
            }
          />
        </View>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Text style={{ fontWeight: "bold" }}>index.tsx/HomeScreen</Text>
          <Text style={{ fontWeight: "bold" }}>This is the Dashboard</Text>
          <View></View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate("Add a friend")}
      >
        <Text
          style={{
            fontSize: 30,
            color: "#EAFFFD",
          }}
        >
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  floatingButton: {
    position: "absolute",
    zIndex: 2,
    bottom: 30,
    right: 30,
    backgroundColor: "#FFC9AD",
    padding: 5,
    paddingVertical: 10,
    borderRadius: 100,
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  daysTillBirthday: {
    fontSize: 16,
    fontWeight: "600",
  },
  friendContainer: {
    margin: 8,
    padding: 5,
  },
});
