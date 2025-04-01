import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { register } from "../../services/api";

export default function RegisterScreen(): JSX.Element {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation<any>();

  const checkInput = (): boolean => {
    if (!name.trim()) {
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
      register(name, email, password);
      Alert.alert("Registration Successful", `Welcome, ${name}!`);
      // Navigate
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        inputMode="email"
      />
      <Text style={styles.label}>Password</Text>
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
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
