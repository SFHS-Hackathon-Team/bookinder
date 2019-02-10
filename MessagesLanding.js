import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';
import axios from 'axios';

class MessagesLanding extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Messages Landing</Text>
      </View>
    )
  }
}

export default MessagesLanding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
});
