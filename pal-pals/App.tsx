import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Home from "./app/home";
import HomeScreen from "./app/index";
import SignIn from "./app/screens/signIn";
import Settings from "./app/screens/settings";
import AddFriend from "./app/screens/addFriend";
import FriendsList from "./app/screens/friendsList";
import RegisterScreen from "./app/screens/register";
import LogoutButton from "./components/LogoutIcon";
import ScreenHeaderBtn from "./components/ScreenHeaderBtn";

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("jwt");
      if (token) {
        console.log("Token found:", token);
        setIsLoggedIn(true);
      } else {
        console.log("No token found");
        setIsLoggedIn(false);
      }
      setIsLoading(false);
    };
    checkToken();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? "Home" : "Register"}>
        <Stack.Screen
          name="Home Screen"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerShadowVisible: false,
            headerTitle: "",
            headerTitleAlign: "center",
            headerRight: () => (
              <ScreenHeaderBtn
                title="Settings"
                onClick={() => navigation.navigate("Settings")}
                iconUrl={require("./assets/images/cog.png")}
                dimension={{ width: 30, height: 30 }}
              />
            ),
            headerLeft: () => (
              <ScreenHeaderBtn
                title="Friends List"
                onClick={() => navigation.navigate("Friends List")}
                iconUrl={require("./assets/images/contacts.png")}
                dimension={{ width: 35, height: 35 }}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerShadowVisible: true,
            // headerStyle: { backgroundColor: "#FFC9AD" },
            headerRight: () => <LogoutButton />,
          }}
        />
        <Stack.Screen name="Add a friend" component={AddFriend} />
        <Stack.Screen name="Sign in" component={SignIn} />
        <Stack.Screen name="Friends List" component={FriendsList} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    // flex: 1,
    backgroundColor: "#FFC9AD",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
