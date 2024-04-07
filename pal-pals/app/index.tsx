import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from "expo-router";
import Hello from "./components/Hello";

const Home = () => {
  const router = useRouter();

  return (
    <>
    <View style={{ flexDirection: 'row' }}>
      <Hello />
      <Text> from Index</Text>
    </View>
    <Text> This should be the Dashboard</Text>
    </>
  );
}

export default Home;
