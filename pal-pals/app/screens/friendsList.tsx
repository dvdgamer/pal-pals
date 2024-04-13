import React from 'react';
import { View, Text, FlatList } from 'react-native';

interface Friend {
  id: string;
  name: string;
}

export default function FriendList() {
  const friends: Friend[] = [
    { id: '1', name: 'John' },
    { id: '2', name: 'Jane' },
    { id: '3', name: 'Alice' },
    { id: '4', name: 'Bob' },
  ];

  const renderFriend = ({ item }: { item: Friend }) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text className='pt-5 mt-5'>Friend List</Text>
      <FlatList
        data={friends}
        renderItem={renderFriend}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
};
