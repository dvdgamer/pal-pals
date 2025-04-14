import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { useState } from "react";
import Calendar from "../components/Calendar";
import { handleAddFriend } from "services/api";

export default function AddFriend() {
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState<Date | null>(null);
  const [popupVisible, setPopupVisible] = useState(false);

  const addFriend = async () => {
    if (!name.trim()) {
      Alert.alert("Input Error", "Please enter your friend's name.");
      return;
    }

    try {
      await handleAddFriend(name, birthdate);
      // Clear the input fields and show success popup
      setName("");
      setBirthdate(null);
      setPopupVisible(true);

      setTimeout(() => {
        setPopupVisible(false);
      }, 3000); // Hide popup after 3 seconds
    } catch (error) {
      console.error("Error adding friend:", error);
      Alert.alert("Error", "Failed to add friend. Please try again.");
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
        placeholder="Enter friend's name"
      />
      <Text>Your friend's name is:</Text>
      <Text style={{ fontWeight: "bold", fontSize: 24 }}> {name}</Text>
      <Text>Add their birthday:</Text>
      <View>
        <Calendar onDateChange={setBirthdate} />
      </View>
      <Pressable style={styles.addFriendButton} onPress={addFriend}>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
          Add Friend
        </Text>
      </Pressable>

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
    position: "absolute",
    top: 50,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 10,
    borderRadius: 5,
  },
  popupText: {
    color: "white",
  },
});
