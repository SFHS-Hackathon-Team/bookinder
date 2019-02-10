import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, Button, Image, TouchableOpacity } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';
import axios from 'axios';
import Scan from './Scan.js';
import Search from './Search.js';

class UserLanding extends Component {

  // _componentDidMount = () => {
  //   const books;
  //   axios.get('http://192.168.34.103:3000/getBooksOwned')
  //   .then(res => {
  //     books = JSON.stringify(res;
  //   })
  //   .catch(e => console.log(e));
  // }

  render() {
    return(
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View style={{alignItems: 'flex-start', justifyContent: 'flex-start'}}>
            <Image
              style={{width: 100, height: 100, borderRadius: 50}}
              source={require('../assets/spongebob.png')} />
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Spongebob Squarepants</Text>
            <Text>@spongebob</Text>
          </View>
        </View>

        <View>
          <Text>  </Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text>      </Text>
          <TouchableOpacity
            style={{backgroundColor: '#DDDDDD', borderRadius: 20, borderColor: 'black'}}
            onPress={() => (this.props.navigation.navigate('Scan'))}>
            <Text style={{fontSize: 20}}>     Books I Own      </Text>
          </TouchableOpacity>
          <Text>       </Text>
          <TouchableOpacity
            style={{backgroundColor: '#DDDDDD', borderRadius: 10, borderColor: 'black'}}
            onPress={() => (this.props.navigation.navigate('Search'))}>
            <Text style={{fontSize: 20}}>     Books I Want    </Text>
          </TouchableOpacity>
          <Text>       </Text>
        </View>

        {/* <View>
          {{if books}}
            <Text> You have a book! </Text>
          {{else }}
            <Text> You don't have a book! </Text>
        </View>

        <View style={{flexDirection: 'column'}}>
          <Text></Text>
        </View> */}

        <View>
          
        </View>
      </View>


    )
  }
}

export default UserLanding;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
});
