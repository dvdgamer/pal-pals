import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from "react-native";
import Accordion from "../../components/Accordion";

export default function FriendList() {
  const userId = 8; // Assuming a fixed userId for now

  const { height, width } = Dimensions.get("window");
  useEffect(() => {
    console.log(`Window dimensions: height=${height}, width=${width}`);
  }, []);

  return (
    <SafeAreaView >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingVertical: 20,
          height: height,
        }}
      >
        <View style={styles.container}>
          <Text style={styles.header}>Friend List</Text>
          <Accordion userId={userId} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// STYLES ////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "purple",
  },
  // friendElementContainer: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   fontSize: 24,
  //   borderColor: "black",
  //   borderWidth: 0.5,
  //   marginTop: 10,
  //   padding: 10,
  //   width: "100%",
  //   backgroundColor: "white",
  // },
  friendElementContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 24,
    borderColor: "black",
    borderWidth: 0.5,
    marginTop: 10,
    padding: 10,
    width: "100%",
  },
  friendText: {
    fontSize: 24,
    margin: 10,
    width: "100%",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
});
