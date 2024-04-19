import { View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity } from "react-native";
import { useState } from "react";
import DatePicker from "react-datepicker";
import Calendar from "../../components/Calendar";

export default function AddFriend() {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState(null);
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
      <Text style= {{ fontWeight: "bold", fontSize: 24}}> { name }</Text>
      <Text>Add their birthday:</Text>
      {/* <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date: Date)}
        dateFormat="dd/MM/yyyy"
      /> */}
      <View>
        <Calendar />
      </View>
      <TouchableOpacity style={styles.addFriendButton}>
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
  }
});
