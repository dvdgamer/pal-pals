import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import Calendar from "../components/Calendar";
import axios from "axios";

export default function AddFriend() {
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState<Date | null>(null);
  const [popupVisible, setPopupVisible] = useState(false);

  // Temporary hardcoded userId
  let userId = 8;

  const handleAddFriend = async () => {
    try {
      // Delete currentBirthdate in production!
      const currentBirthdate = birthdate || new Date(); // Use today's date if birthdate is null
      const response = await axios.post(
        `https://172.21.215.20:3000/api/user/${userId}/friends`,
        {
          friendName: name,
          dateOfBirth: currentBirthdate,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        console.log("Success", "Friend added successfully!");
        setName("");
        setPopupVisible(true);
        setTimeout(() => {
          setPopupVisible(false);
        }, 3000); // Hide popup after 3 seconds
      }
    } catch (error) {
      console.log("Error", "There was an error adding your friend :", error);
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

      {popupVisible && (
        <View style={styles.popup}>
          <Text style={styles.popupText}>Friend added successfully!</Text>
        </View>
      )}
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
  popup: {
    position: 'absolute',
    top: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderRadius: 5,
  },
  popupText: {
    color: 'white',
  },
});
