import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import PhotoFeed from './src/components/photo-feed';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './src/reducers'
import ReduxThunk from 'redux-thunk'
import {NetworkInfo} from 'react-native-network-info'
import publicIP from 'react-native-public-ip';

export default function App() {

  /*publicIP()
  .then(eip => {
      console.log('ipipipipip')
    console.log(eip);
    // '47.122.71.234'
  })
  .catch(error => {
    console.log(error);
    // 'Unable to get IP address.'
  });
    console.log('XXXXXX')
    NetworkInfo.getIPAddress()
      .then(ip => {
        console.log('XXXXXX')
        console.log(ip);
      })
      .catch(error => {
        console.log(error);
      })
    */

  const store=createStore(reducers, {}, applyMiddleware(ReduxThunk))
  return (
    <Provider store={store}>
      <View>
        <Header text='Photos'/>
        <PhotoFeed/> 
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
