import React, { useEffect, useRef } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BirthdayPanel from '../components/Panels/BirthdayPanel';

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  // Debug the screen height
  const { height } = Dimensions.get("window");
  useEffect(() => {
    console.log(`Window dimensions: height=${height}`);
  }, []);

  // Event handler for the floating button
  const handleAddFriendPress = () => {
    navigation.navigate('Add a friend');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View>
          <BirthdayPanel />
        </View>
        <View style={styles.container}>
          <StatusBar style="auto" />
          {/* <Text style={{ fontWeight: "bold" }}>index.tsx/HomeScreen</Text>
          <Text style={{ fontWeight: "bold" }}>This is the Dashboard</Text> */}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={handleAddFriendPress}
      >
        <Text
          style={{
            fontSize: 30,
            color: '#EAFFFD',
          }}
        >
          +
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingButton: {
    position: 'absolute',
    zIndex: 2,
    bottom: 30,
    right: 30,
    backgroundColor: '#FFC9AD',
    padding: 5,
    paddingVertical: 10,
    borderRadius: 100,
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 100,
    height: Dimensions.get("window").height
  },
});
