import { Pressable, Text, View, StyleSheet, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
// import Settings from "./screens/settings";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{ fontWeight: "bold" }}>index.tsx/HomeScreen</Text>
      <Button
        title="+"
        onPress={() => navigation.navigate("Add a friend")}
        style={styles.addFriend}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addFriend: {
    backgroundColor: "green",
    color: "white",
    padding: 10,
    borderRadius: 5,
  },
});
