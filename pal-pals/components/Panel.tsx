import {View, Text, StyleSheet } from "react-native";

export default function Panel() {
  return (
    <View style={ styles.container }>
      <View><Text>Panel Title</Text></View>
      <View><Text>Users</Text></View>
    </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f9c2ff", // light purple, gray->E5E7F0
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
