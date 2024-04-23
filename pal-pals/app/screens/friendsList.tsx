import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

interface Friend {
  id: string;
  name: string;
}

export default function FriendList() {
  const friends: Friend[] = [
    { id: "1", name: "John" },
    { id: "2", name: "Jane" },
    { id: "3", name: "Alice" },
    { id: "4", name: "Bob" },
  ];

  const renderFriend = ({ item }: { item: Friend }) => (
    <View style={styles.friendElementContainer}>
      <Text>{item.name}</Text>
      <TouchableOpacity>
        <Image
          source={require("../../assets/images/cog.png")}
          resizeMode="cover"
          style={{ width: 30, height: 30, marginRight: 10 }}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text className="pt-5 mt-5">Friend List</Text>
      <FlatList
        data={friends}
        renderItem={renderFriend}
        keyExtractor={(item) => item.id}
        style={styles.friendText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  friendElementContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 24,
    borderColor: "black",
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    width: "100%",
    backgroundColor: "white",
  },
  friendText: {
    fontSize: 24,
    margin: 10,
    width: "100%",
  },
});
