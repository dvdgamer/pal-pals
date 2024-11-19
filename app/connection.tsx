import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function TestConnection() {
  useEffect(() => {
    const testConnection = async () => {
      try {
        const response = await fetch('http://172.21.215.20:3000/test');
        const data = await response.json();
        console.log('Connection successful:', data);
      } catch (error) {
        console.error('Connection failed:', error);
      }
    };

    testConnection();
  }, []);

  return (
    <View>
      <Text>Check console for connection results</Text>
    </View>
  );
}
