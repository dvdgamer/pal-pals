import Home from "./app/home";
import HomeScreen from "./app/index";
import Settings from "./app/screens/settings";
import AddFriend from "./app/screens/addFriend";
import FriendsList from "./app/screens/friendsList";
import ScreenHeaderBtn from "./components/ScreenHeaderBtn";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="HomeScreen"
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
