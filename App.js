import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, { backgroundColor: 'cyan' }]} />
        <View style={[styles.box, { backgroundColor: 'magenta', alignSelf: 'flex-end' }]} />
        <View style={[styles.box, { backgroundColor: 'yellow' }]} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // Ausrichtung der Hauptachse
    justifyContent: 'space-evenly', // Anordnung auf der Hauptachse
    alignItems: 'center' // Anordnung auf der Querachse
  },
  box: {
    width: 100,
    height: 100
  }
});

// Jede View ist bereits ein FlexContainer und hat das FlexBox - Layout

// FlexBox-Layout - wichtige Styling-Eigenschaften:
// flexDirection legt Ausrichtung der Hauptachse fest
// flexDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse'
// flexDirection hat 'column' als Default

// justifyContent legt Darstellung auf der Hauptachse fest
// justifyContent: 'flex-start' | 'flex-end' | 'center' ...
// justifyContent: hat 'flex-start' als Default

// alignItems für Darstellung auf der Querachse (entgegen Hauptachse)
// alignItems: 'flex-start' | 'flex-end' | 'center' ...
// 'baseline' | ' stretch'
// alignItems hat 'stretch' als Default

// alignSelf überschreibt Darstellung auf der Querachse für eine Komponente

// flexWrap (ggf. alignContent) ermöglichen Umbrüche der Komponenten





/* export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.square} />
        <View style={styles.box} />
        <View style={styles.boxTower}>
        </View>
      </View>
    );
  }
} */

/* const styles = StyleSheet.create({
  container: {
    flex: 1 // flex > 0 --> maximale Ausdehnung
    //width: '50%',
    //height: '50%'
  },
  square: {
    flex: 1,
    //width: 150,
    //height: 150,
    backgroundColor: 'cyan'
  },
  box: {
    flex: 2, // 2x so groß wie square
    //width: '100%',
    //height: 100,
    backgroundColor: 'magenta'
  },
  boxTower: {
    flex: 3, // 3x so groß wie square
    //width: 100,
    //height: '50%',
    backgroundColor: 'yellow'
  }
}); */
