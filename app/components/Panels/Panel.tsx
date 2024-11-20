import { View, Text, StyleSheet, FlatList } from "react-native";
import { Friend } from "../../../types/types";

interface PanelProps {
  panelTitle: string;
  list?: Array<Friend>;
  innerView?: JSX.Element;
  renderItem: ({ item }: { item: Friend }) => JSX.Element;
}
// When generating the Dashboard fetch once friendsList and send each item to
// its respective panel lists

export default function Panel({ panelTitle, list, innerView, renderItem }: PanelProps) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{panelTitle}</Text>
      </View>
      <View>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        <View>
          {innerView}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 25,
    paddingBottom: 150,
    backgroundColor: "#E5E7F0", // light grey
    margin: 10,
    marginHorizontal: 20,
    zIndex: 0,
  },
  titleText: {
    padding: 10,
    fontSize: 24,
    height: 44,
    fontWeight: "bold",
    marginBottom: 10
  },
  titleContainer: {
    backgroundColor: "#EAFFFD", // light blue
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
});
