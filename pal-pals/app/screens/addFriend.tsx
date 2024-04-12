import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";
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
      <Text>Your friend's name is: {name}</Text>
      <Text>Add their birthday:</Text>
      {/* <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date: Date)}
        dateFormat="dd/MM/yyyy"
      /> */}
      <View>
        <Calendar />
      </View>
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
});
