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
    <View>
      <Text style={styles.friendElement}>{item.name}</Text>
      <TouchableOpacity>
        <Image
          source={require("../../assets/images/cog.png")}
          resizeMode="cover"
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
  friendElement: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  friendText: {
    fontSize: 24,
    margin: 10,
    width: "100%",
    // paddingLeft: 10,
  },
});
