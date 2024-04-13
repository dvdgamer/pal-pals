import { View, Text } from 'react-native';

export default function Settings() {
  return (
    <View style={{ flex: 1}}>
      <View>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>Settings</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Text>Edit Profile</Text>
        <Text>Preferences</Text>
        <Text>Notifications             On/Off</Text>
        <Text>Report an issue</Text>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Log out</Text>
      </View>
    </View>
  );
}
