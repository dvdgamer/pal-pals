import React, { Component } from "react";
import Accordion from "react-native-collapsible/Accordion";
import { View, Text, StyleSheet } from "react-native";


const SECTIONS = [
  {
    id: 1,
    name: "John",
    content: "Friend 1",
    dateOfBirth: new Date().toLocaleDateString(),
    timeElapsed: 4,
    timeBetweenMeetings: 7,
  },
  {
    id: 2,
    name: "Jane",
    content: "Friend 2",
    dateOfBirth: new Date().toLocaleDateString(),
    timeElapsed: 20,
  },
  {
    id: 3,
    name: "Alice",
    content: "Friend 3",
    dateOfBirth: new Date().toLocaleDateString(),
    timeElapsed: 3,
  },
  {
    id: 4,
    name: "Bob",
    content: "Friend 4",
    dateOfBirth: new Date().toLocaleDateString(),
    timeElapsed: 17,
  },
  {
    id: 5,
    name: "Scotty Cryee",
    content: "Friend 5",
    dateOfBirth: new Date().toLocaleDateString(),
    timeElapsed: 42,
  },
  {
    id: 6,
    name: "Emily",
    content: "Friend 6",
    dateOfBirth: new Date().toLocaleDateString(),
    timeElapsed: 10,
  },
  {
    id: 7,
    name: "Michael",
    content: "Friend 7",
    dateOfBirth: new Date().toLocaleDateString(),
    timeElapsed: 8,
  },
  {
    id: 8,
    name: "Sophia",
    content: "Friend 8",
    dateOfBirth: new Date().toLocaleDateString(),
    timeElapsed: 15,
  },
  {
    id: 9,
    name: "Daniel",
    content: "Friend 9",
    dateOfBirth: new Date().toLocaleDateString(),
    timeElapsed: 12,
  },
  {
    id: 10,
    name: "Olivia",
    content: "Friend 10",
    dateOfBirth: new Date().toLocaleDateString(),
    timeElapsed: 6,
  },
];

interface Section {
  id: number;
  name: string;
  content?: string;
  dateOfBirth: Date;
  timeElapsed?: string | number;
  timeBetweenMeetings?: number | Date;
}

class AccordionView extends Component {
  state = {
    activeSections: [],
  };

  _renderHeader = (section: Section) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.name}</Text>
      </View>
    );
  };

  _renderContent = (section: Section) => {
    return (
      <View style={styles.content}>
        <Text className="m-5">
          Birthdate:
          <Text style={{ fontWeight: "bold" }}>
            {section.dateOfBirth.toString()}
          </Text>
        </Text>
        <Text className="m-5">
          <Text style={{ fontWeight: "bold" }}>{section.timeElapsed}</Text> days
          since you've last met
        </Text>
        <Text className="m-5">
          I'd like to meet you every{" "}
          <Text style={{ fontWeight: "bold" }}>
            {String(section.timeBetweenMeetings)}
          </Text>{" "}
          days
        </Text>
      </View>
    );
  };

  _updateSections = (activeSections: number[]) => {
    this.setState({ activeSections });
  };



  render() {
    return (
      <Accordion
        sections={SECTIONS}
        activeSections={this.state.activeSections}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
        style={styles.friendElementContainer}
      />
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    borderColor: "black",
    borderWidth: 0.5,
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    padding: 20,
    backgroundColor: "#fff",
    width: "100%",
    fontSize: 24,
  },
  friendElementContainer: {
    // flex: 1,
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    fontSize: 24,
    width: "100%",
  },
});

export default AccordionView;
