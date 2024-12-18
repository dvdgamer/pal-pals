import { Stack } from "expo-router";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <Stack.Screen
      name="Home"
      options={{
        headerShadowVisible: false,
        headerTitle: "Home",
        headerRight: () => (
          <ScreenHeaderBtn
            title="Right Button"
            onClick={() => console.log("Button clicked")}
            iconUrl={undefined}
            dimension={undefined}
          />
        ),
        headerLeft: () => (
          <ScreenHeaderBtn
            title="Left Button"
            onClick={() => console.log("Button clicked")}
            iconUrl={undefined}
            dimension={undefined}
          />
        ),
      }}
    />
  );
};

export default Home;
