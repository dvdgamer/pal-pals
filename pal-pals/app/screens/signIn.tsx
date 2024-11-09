import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert, Button, Text, TextInput, View, StyleSheet } from "react-native";
import { login } from "../../services/api";

export default function SignInScreen(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation<any>();

  const checkInput = (): boolean => {
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

  const handleLogin = () => {
    if (checkInput()) {
      login(email, password)
      Alert.alert("Registration Successful", `Welcome, ${email}!`);
      navigation.navigate('Home Screen');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
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
      <Button title="Sign in" onPress={handleLogin} />
      <Button
        title="New here? Register "
        onPress={() => navigation.navigate("Sign in")}
      />
    </View>
  );
};

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
