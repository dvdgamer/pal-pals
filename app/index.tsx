import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import BirthdayPanel from './components/Panels/BirthdayPanel';

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  // useEffect(() => {}, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <>
          <BirthdayPanel />
        </>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Text style={{ fontWeight: "bold" }}>index.tsx/HomeScreen</Text>
          <Text style={{ fontWeight: "bold" }}>This is the Dashboard</Text>
          <View></View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate("Add a friend")}
      >
        <Text
          style={{
            fontSize: 30,
            color: "#EAFFFD",
          }}
        >
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  floatingButton: {
    position: "absolute",
    zIndex: 2,
    bottom: 30,
    right: 30,
    backgroundColor: "#FFC9AD",
    padding: 5,
    paddingVertical: 10,
    borderRadius: 100,
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
