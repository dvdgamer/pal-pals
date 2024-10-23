import React from "react";
import { View, Text, Button, StyleSheet, Modal } from "react-native";

interface ConfirmationPopUpProps {
  visible: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmationPopUp({
  visible,
  message,
  onConfirm,
  onCancel,
}: ConfirmationPopUpProps): JSX.Element {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onCancel}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.message}>{message}</Text>
          <View style={styles.actions}>
            <Button title="Confirm" onPress={onConfirm} />
            <Button title="Cancel" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  message: {
    marginBottom: 20,
    fontSize: 16,
    textAlign: "center",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
