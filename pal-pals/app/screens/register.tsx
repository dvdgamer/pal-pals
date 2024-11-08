import { Link } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function RegisterScreen(): JSX.Element {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation<any>();

  const checkInput = (): boolean => {
    if (!username.trim()) {
      Alert.alert("Input Error", "Username is required");
      return false;
    }
    if (!email.trim()) {
      Alert.alert("Input Error", "Email is required");
      return false;
    }
    if (!password.trim()) {
      Alert.alert("Input Error", "Password is required");
      return false;
    }
    return true;
  };

  const handleRegister = () => {
    if (checkInput()) {
      // Add registration logic here
      Alert.alert("Registration Successful", `Welcome, ${username}!`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Text>Eventual google auth</Text>
      <Button title="Register" onPress={handleRegister} />
      <Button
        title="Already have an account? "
        onPress={() => navigation.navigate("Sign in")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
