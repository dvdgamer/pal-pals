import { Pressable, View, StyleSheet } from "react-native";
import { deleteFriend } from "../../services/api";


interface DeleteFriendButtonProps {
  userId: number;
  friendId: number;
}

export default function DeleteFriendButton({ friendId }: DeleteFriendButtonProps) {
  const handlePress = async () => {
    await deleteFriend(friendId);
  };

  return (
    <View>
      <Pressable onPress={handlePress} style={styles.deleteButton}>
        X
      </Pressable>
    </View>
  )
}

// STYLES ==================================================================

const styles = StyleSheet.create({
  deleteButton: {
    backgroundColor: "red",
  }
});
