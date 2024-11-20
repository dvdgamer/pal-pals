import React from "react";
import Home from "./app/home";
import HomeScreen from "./app/index";
import SignIn from "./app/screens/signIn";
import Settings from "./app/screens/settings";
import AddFriend from "./app/screens/addFriend";
import FriendsList from "./app/screens/friendsList";
import RegisterScreen from "./app/screens/register";
import LogoutIcon from "./app/components/LogoutIcon";
import ScreenHeaderBtn from "./app/components/ScreenHeaderBtn";
// import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { logout } from "./services/api";

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem("jwt");
        if (token) {
          console.log("Token found:", token);
          setIsLoggedIn(true);
        } else {
          console.log("No token found");
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Error checking token:", error);
        Alert.alert("Error", "An error occurred while checking the token.");
      } finally {
        setIsLoading(false);
      }
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
            // headerTitle: "Dashboard",
            headerTitleAlign: "center",
            // headerStyle: { backgroundColor: "#FFC9AD" },
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
          name="Settings"
          component={Settings}
          options={() => ({
            headerShadowVisible: true,
            // headerStyle: { backgroundColor: "#FFC9AD" },
            headerRight: () =>  <LogoutIcon />
          })}
        />
        <Stack.Screen name="Sign in" component={SignIn} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Add a friend" component={AddFriend} />
        <Stack.Screen name="Friends List" component={FriendsList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
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
