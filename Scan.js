import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, Button, TouchableOpacity } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';
import axios from 'axios';

export default class Scan extends Component {

  state = {
    hasCameraPermission: null
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = data => {
    axios.get('https://api.altmetric.com/v1/isbn/' + data.data)
    .then(res => {
      Alert.alert(
        'Scan successful!',
        JSON.stringify(res.data.title + ' by ' + res.data.authors_or_editors),
        [
          {
            text: 'Next',
            onPress: this._handleOnNext(res.data),
          },
        ],
      )
    })
    .catch(e => console.log(e));

  };

  _handleOnNext = data => {
    axios.post('http://192.168.34.103:3000/addBook', {
      title: data.title,
      author: data.authors_or_editors[0],
      isbn: data.isbns[0],
      url: data.uri,
      owned: 'true'
    })
    .catch(e => console.log(e));
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {this.state.hasCameraPermission === null ?
          <Text>Requesting for camera permission</Text> :
          this.state.hasCameraPermission === false ?
            <Text>Camera permission is not granted</Text> :
            <BarCodeScanner
              onBarCodeRead={this._handleBarCodeRead}
              style={{ height: 300, width: 400 }}
            />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
});
