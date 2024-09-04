import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import Accordion from '../../components/Accordion';
// import { useEffect, useState } from "react";
// import { fetchUserData } from "../../services/api";

export default function FriendList() {
  const userId = 8; // Assuming a fixed userId for now

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ justifyContent: "center", alignItems: "center"}}>
        <Text style={styles.header}>Friend List</Text>
        <Accordion userId={userId} />
      </View>
    </ScrollView>
  );
}

// STYLES ////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  friendElementContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 24,
    borderColor: "black",
    borderWidth: 0.5,
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
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
