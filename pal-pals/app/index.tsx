import {
  Pressable,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
// import Settings from "./screens/settings";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{ fontWeight: "bold" }}>index.tsx/HomeScreen</Text>

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate("Add a friend")}
      >
        <Text style={{ fontWeight: "bold", fontSize: 35, color: "white" }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  floatingButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "#FFC9AD",
    padding: 5,
    borderRadius: 100,
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
