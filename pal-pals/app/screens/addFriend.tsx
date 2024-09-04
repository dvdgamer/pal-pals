import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import Calendar from "../../components/Calendar";
import axios from "axios";

export default function AddFriend() {
  const [name, setName] = useState("");
  // const [birthdate, setBirthdate] = useState(new Date());
  const [birthdate, setBirthdate] = useState<Date | null>(null);

  // Temporary hardcoded userId
  let userId = 8;

  const handleAddFriend = async () => {
    try {
      const response = await axios.post(
        `http://172.21.215.20:3000/api/user/${userId}/friends`,
        {
          name: name,
          dateOfBirth: birthdate,
        }
      );
      if (response.status === 200) {
        console.log("Success", "Friend added successfully!");
      }
    } catch (error) {
      console.log("Error", "There was an error adding your friend.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "left" }}>Your friend's name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        autoCorrect={false}
      />
      <Text>Your friend's name is:</Text>
      <Text style={{ fontWeight: "bold", fontSize: 24 }}> {name}</Text>
      <Text>Add their birthday:</Text>
      <View>
        <Calendar onDateChange={setBirthdate} />
      </View>
      <TouchableOpacity
        style={styles.addFriendButton}
        onPress={handleAddFriend}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
          Add Friend
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    margin: 10,
    width: 200,
  },
  addFriendButton: {
    flex: 1,
    backgroundColor: "#FFC9AD",
    padding: 10,
    borderRadius: 27,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.1,
    position: "absolute",
    bottom: 30,
  },
});
