import { Pressable, Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";


export default function Page() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Link href="/pages/settings" asChild>
        <Pressable>
          <Text>Home</Text>
          <StatusBar style="auto"/>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
