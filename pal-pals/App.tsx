import Home from "./app/home";
import HomeScreen from "./app/index";
import SignIn from "./app/screens/signIn";
import Settings from "./app/screens/settings";
import AddFriend from "./app/screens/addFriend";
import FriendsList from "./app/screens/friendsList";
import RegisterScreen from './app/screens/register';
import ScreenHeaderBtn from "./components/ScreenHeaderBtn";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

export default function App() {
  // useEffect(() => {
  //   const checkToken = async () => {
  //     const token = await AsyncStorage.getItem("jwt");
  //     if (token) {
  //       console.log("Token found:", token);
  //       // Perform actions with the token, e.g., set user state, navigate to the main app screen, etc.
  //     } else {
  //       console.log('No token found');
  //       // Navigate to the login screen
  //     }
  //   };
  //   checkToken();
  // }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
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
          component={RegisterScreen}
          options={({ navigation }) => ({
            headerShadowVisible: true,
            // headerStyle: { backgroundColor: "#FFC9AD" },
            headerRight: () => (
              <ScreenHeaderBtn
                title="Settings"
                onClick={() => navigation}
                iconUrl={require("./assets/images/logoutIcon.png")}
                dimension={{ width: 30, height: 30 }}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Add a friend"
          component={AddFriend}
          //                                 To add color to the header

          // options={() => (
          //   {
          //     headerShadowVisible: true,
          //     headerStyle: { backgroundColor: "#FFC9AD" },
          //   }
          // )}
        />
        <Stack.Screen name="Sign in" component={SignIn} />
        <Stack.Screen name="Friends List" component={FriendsList} />
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
});
