import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Settings() {
  const MainText = ({ children }: { children: React.ReactNode }) => (
    <Text style={styles.settingsMain}>{children}</Text>
  );

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginLeft: 20,
            marginBottom: 40,
          }}
        >
          Settings
        </Text>
      </View>

      <View style={[styles.settingsMain, { borderBottomWidth: 0 }]}>
        <MainText>Edit Profile</MainText>
        <MainText>Preferences</MainText>
        <MainText>Notifications On/Off</MainText>
        <MainText>Report an issue</MainText>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <TouchableOpacity style={styles.logOutButton}>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logOutButton: {
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
  settingsMain: {
    // flex: 1,
    justifyContent: "center",
    marginLeft: 10,
    fontSize: 24,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    margin: 10,
  },
});
