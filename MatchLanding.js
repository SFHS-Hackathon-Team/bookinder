import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';
import axios from 'axios';

class MatchLanding extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Match Landing</Text>
      </View>
    )
  }
}

export default MatchLanding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
});
