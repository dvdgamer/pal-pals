import React from 'react';
import Home from './app/index';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";

export default function App() {
  return (
    <Home />
  );
}


NativeWindStyleSheet.setOutput({
  default: "native",
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });
