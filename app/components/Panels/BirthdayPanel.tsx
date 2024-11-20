import Panel from "./Panel";
import { Friend } from "types/types";
import { useEffect, useState } from "react";
import { fetchFriendsList } from "services/api";
import { View, StyleSheet, Text } from "react-native";

export default function BirthdayPanel(): JSX.Element {
  const [upcomingBirthdaysList, setUpcomingBirthdaysList] = useState<Friend[]>(
    []
  );

  useEffect(() => {
    const fetchAndProcessFriends = async () => {
      const userData = await fetchFriendsList(8);
      // console.log(userData);
      const friendsList = userData;
      // console.log("friendsList", friendsList);
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

  return (<Panel
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
            (nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
          );

          return (
            <View key={friend.id} style={styles.friendContainer}>
              <Text style={styles.title}>{friend.name}</Text>
              <Text style={styles.daysTillBirthday}>
                {diffInDays} days until birthday
              </Text>
            </View>
          );
        })}
      </View>
    }
  />)
}

const styles = StyleSheet.create({
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
})
