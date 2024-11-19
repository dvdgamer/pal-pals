import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Panel from "../components/Panel";
import { fetchFriendsList } from "../services/api";
import { Friend } from "../types";
// import Settings from "./screens/settings";

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const [upcomingBirthdaysList, setUpcomingBirthdaysList] = useState<Friend[]>(
    []
  );

  // TODO improve logic to make it faster
  useEffect(() => {
    const fetchAndProcessFriends = async () => {
      const userData = await fetchFriendsList(8);
      const friendsList = userData;
      console.log("friendsList", friendsList)
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

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <Panel
            panelTitle="Around the corner"
            list={upcomingBirthdaysList}
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
                    <Text key={friend.id}>
                      {friend.name} - {diffInDays} days until birthday
                    </Text>
                  );
                })}
              </View>
            }
          />
          {/* <Panel />
          <Panel /> */}
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
            // fontWeight: "bold",
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
});
