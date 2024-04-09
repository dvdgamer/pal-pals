import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter, useNavigation } from "expo-router";
import Hello from "../components/Hello";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";


const Home = () => {
  // const router = useRouter();
  // const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShadowVisible: false,
            headerTitle: 'Home',
            headerRight: () => (
              <ScreenHeaderBtn title="Right Button" onClick={() => console.log('Button clicked')} />
            ),
            headerLeft: () => (
              <ScreenHeaderBtn title="Left Button" onClick={() => console.log('Button clicked')} />
            ),
          }} />
        <ScrollView>
          <View>
            <Text>Home Page</Text>
            <Hello />
          </View>
        </ScrollView>
      </Stack.Navigator>
    </SafeAreaView>
  );
}

export default Home;
