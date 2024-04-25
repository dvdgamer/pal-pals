import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import AccordionView from '../../components/Collapsible';

interface Friend {
  id: number;
  name: string;
  content?: string;
  dateOfBirth?: Date;
  timeElapsed?: number;
}

export default function FriendList() {
  const friends: Friend[] = [
    { id: 1, name: "John", content: "Friend 1", dateOfBirth: new Date(), timeElapsed: 0 },
    { id: 2, name: "Jane", content: "Friend 2", dateOfBirth: new Date(), timeElapsed: 0 },
    { id: 3, name: "Alice", content: "Friend 3", dateOfBirth: new Date(), timeElapsed: 0 },
    { id: 4, name: "Bob", content: "Friend 4", dateOfBirth: new Date(), timeElapsed: 0 },
    { id: 5, name: "Scotty Cryee", content: "Friend 5", dateOfBirth: new Date(), timeElapsed: 0 },
  ];

  const renderFriend = ({ item }: { item: Friend }) => (
    <View style={styles.friendElementContainer}>
      <Text>{item.name}</Text>
      <TouchableOpacity>
        <Image
          source={require("../../assets/images/cog.png")}
          resizeMode="cover"
          style={{ width: 30, height: 30, marginRight: 10 }}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text className="pt-5 mt-5">Friend List</Text>
      <FlatList
        data={friends}
        renderItem={renderFriend}
        keyExtractor={(item) => item.id.toString()}
        style={styles.friendText}
      />
      <AccordionView></AccordionView>
    </View>
  );
}

const styles = StyleSheet.create({
  friendElementContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 24,
    borderColor: "black",
    borderWidth: 0.5,
    marginTop: 10,
    padding: 10,
    width: "100%",
    backgroundColor: "white",
  },
  friendText: {
    fontSize: 24,
    margin: 10,
    width: "100%",
  },
});
