import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from "expo-router";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";


const Home = () => {
  // const router = useRouter();
  // const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack.Screen
        name="Home"
        options={{
          headerShadowVisible: false,
          headerTitle: 'Home',
          headerRight: () => (
            <ScreenHeaderBtn title="Right Button" onClick={() => console.log('Button clicked')} />
          ),
          headerLeft: () => (
            <ScreenHeaderBtn title="Left Button" onClick={() => console.log('Button clicked')} />
          )
        }} />
      <ScrollView>
        <View>
          <Text>Home Component</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;

// import { Redirect } from "expo-router";

// export default function Index() {
//     return <Redirect href="/home" />;
// }
