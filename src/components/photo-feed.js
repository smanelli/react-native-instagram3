import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import PhotoSection from './photo-section'
import {connect} from 'react-redux'
import {getPhotos} from '../actions'

//import  Constants  from 'expo-constants';
//const {manifest}= Constants;
//import Expo from "expo";
//const { manifest } = Expo.Constants;
//const uri = `http://${manifest.debuggerHost.split(':').shift()}:3000`; 
//const uri = `http://192.168.43.58:3000`;
//console.log(uri)
//const uri = `http://${manifest.debuggerHost.split(':').shift()}:4000`;
//console.log (uri)



class PhotoFeed extends Component {
  constructor(props) {
    super(props);

  }
  
componentDidMount() {
  this.props.getPhotos()
}

  renderPhotos() {
      console.log('getPhotos')
    return this.props.photos.map(_photo => {
        return (<PhotoSection key={_photo.key} photo={_photo} />)

    })
  }

  render() {
      console.log('render')
      return (
          <ScrollView>
              {this.renderPhotos()}
          </ScrollView>
      )
  }
}

function mapStateToProps(state) {
  console.log('mapStateToProps')
  return {
    photos: state.photos
  }
}

export default connect(mapStateToProps, {getPhotos})(PhotoFeed)