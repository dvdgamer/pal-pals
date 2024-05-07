import { View, Text, StyleSheet } from "react-native";

export default function Panel() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Panel Title</Text>
      </View>
      <View>
        <Text>Users</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 25,
    paddingBottom: 150,
    backgroundColor: "#E5E7F0", // light grey
    margin: 10,
    marginHorizontal: 20,
    zIndex: 0,

  },
  titleText: {
    padding: 10,
    fontSize: 20,
    height: 44,
    fontWeight: "bold",
  },
  titleContainer: {
    backgroundColor: "#EAFFFD", // light blue
    alignItems: "center",
    justifyContent: "center",
  },
});
