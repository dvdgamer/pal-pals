import Home from "./app/home";
import HomeScreen from "./app/index";
import Settings from "./app/screens/settings";
import AddFriend from "./app/screens/addFriend";
import ScreenHeaderBtn from "./components/ScreenHeaderBtn";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  // const navigation = useNavigation();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerShadowVisible: false,
            headerTitle: "Home",
            headerRight: () => (
              <ScreenHeaderBtn
                title="Settings"
                onClick={() => navigation.navigate('Settings')}
                iconUrl={require('./assets/images/cog.png')}
                dimension={{ width: 30, height: 30 }}
              />
            ),
          })}
        />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Add a friend" component={AddFriend} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });
