import React, { Component } from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import { View, Text, StyleSheet } from 'react-native';

// export default function Collapsible(): React.JSX.Element{
//   const isCollapsed = true;

//   return(
//   <Collapsible collapsed={isCollapsed}>
//     <SomeCollapsedView />
//   </Collapsible>
//   )
// }
// ;
const SECTIONS = [
  {
    name: 'Daviud',
    dateOfBirth: Date,
    timeElapsed: 0, // Replace 'number' with an actual value
  },
  {
    name: 'Second',
    content: 'Lorem ipsum...',
  },
];

interface Section {
  name: string;
  content?: string;
  dateOfBirth?: Date;
  timeElapsed?: number;
}

class AccordionView extends Component {
  state = {
    activeSections: [],
  };

  _renderSectionName = (section : Section) => {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  };

  _renderHeader = (section : Section) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.name}</Text>
      </View>
    );
  };

  _renderContent = (section : Section) => {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  };

  _updateSections = (activeSections : Section) => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <Accordion
        sections={SECTIONS}
        activeSections={this.state.activeSections}
        renderSectionname={this._renderSectionName}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
      />
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default AccordionView;
