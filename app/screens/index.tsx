import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

import BirthdayPanel from "../components/Panels/BirthdayPanel";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDebugHeight } from "@/hooks/useDebugHeight";
import { useRef } from "react";
// const BirthdayPanel = React.lazy(() => import("./components/Panels/BirthdayPanel"));

//TODO improve performance
export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const scrollViewRef = useRef<View>(null);

  useDebugHeight(scrollViewRef, "index");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View>
          <BirthdayPanel />
        </View>
        <View style={styles.container}>
          <StatusBar style="auto" />
          {/* <Text style={{ fontWeight: "bold" }}>index.tsx/HomeScreen</Text>
          <Text style={{ fontWeight: "bold" }}>This is the Dashboard</Text> */}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate("Add a friend")}
      >
        <Text
          style={{
            fontSize: 30,
            color: "#EAFFFD",
          }}
        >
          +
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
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
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 100,
  },
});
