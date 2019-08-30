import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import PhotoSection from './photo-section'

//import  Constants  from 'expo-constants';
//const {manifest}= Constants;
//import Expo from "expo";
//const { manifest } = Expo.Constants;
//const uri = `http://${manifest.debuggerHost.split(':').shift()}:3000`; 
const uri = `http://10.0.0.38:3000`;
//console.log(uri)
//const uri = `http://${manifest.debuggerHost.split(':').shift()}:4000`;
//console.log (uri)



export default class PhotoFeed extends Component {
  constructor(props) {
    super(props);

  }
  
  state={};

  componentWilMount() {
      console.log('will mount')
  }
  
  componentDidMount() {
    console.log('did mount')
    //axios.defaults.adapter = require('axios/lib/adapters/http');
    axios.get(uri+'/photos')
    .then((response) => {
        // Success 🎉
        console.log(response.status);
        this.setState({photos: response.data})
    })
    .catch((error) => {
        // Error 😨
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
            console.log(error.message);
        } else {
            console.log('Error ', error.message);
        }
        console.log(error.config);
    });    
  }

  getPhotos() {
      console.log('getPhotos')
    return this.state.photos.map(_photo => {
        return (<PhotoSection key={_photo.key} photo={_photo} />)

    })
  }

  render() {
      console.log('render')
      if(!this.state.photos) {
          console.log('not reay yet')
          return (
            <ScrollView>
                
            </ScrollView>
          )}
      else {
        return (
            <ScrollView>
                {this.getPhotos()}
            </ScrollView>
    );
        }
  }
}
