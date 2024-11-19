import { TouchableOpacity, View, StyleSheet } from "react-native";
import { deleteFriend } from "../../services/api";


interface DeleteFriendButtonProps {
  userId: number;
  friendId: number;
}

export default function DeleteFriendButton({ userId, friendId }: DeleteFriendButtonProps) {
  const handlePress = async () => {
    await deleteFriend(userId, friendId);
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress} style={styles.deleteButton}>
        X
      </TouchableOpacity>
    </View>
  )
}

// STYLES ==================================================================

const styles = StyleSheet.create({
  deleteButton: {
    backgroundColor: "red",
  }
});
