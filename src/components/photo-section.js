import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'




export default class PhotoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.like=false
    this.state={heartIcon: 'ios-heart-empty'}
  } 

  toggleLike() {
    this.like = !this.like
    //this.state={heartIcon: (this.like)? 'ios-heart' : 'ios-heart-empty'}
    if(this.like) {
      this.setState({heartIcon: 'ios-heart'})
    } else {
      this.setState({heartIcon: 'ios-heart-empty'})
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.thumbnailSection}>
              <Image 
                style={styles.thumbnail}
                source={{uri: this.props.photo.user_avatar}}/>
              <View style={styles.userContainer}>
                <Text style={styles.userName}>{this.props.photo.username}</Text>
              </View>
          </View>
          <View>
              <Image 
                style={{width: null, height: 300}}
                source={{uri: this.props.photo.image}}/>
          </View> 
          <View style={styles.heartContainer}>
            <TouchableWithoutFeedback onPress={this.toggleLike.bind(this)}>
              <Ionicons 
                name={this.state.heartIcon}
                size={30}
                style={{color: this.state.heartIcon === 'ios-heart' ? 'red' : 'black'}}
                />
            </TouchableWithoutFeedback>
          </View>    
          <View style={styles.imageMeta}>
            <Text style={styles.userName}> {this.props.photo.username} </Text>
            <Text> {this.props.photo.caption} </Text>
          </View>                         
      </View>
    );
  }
}

const styles = {
    titleContainer: {
      justifyContent: 'space-around'
    },
  
    container: {
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
      marginBottom: 10,
    },
  
    thumbnailSection: {
      borderBottomWidth: 1,
      padding: 5,
      fontSize:20,
      justifyContent: 'flex-start',
      borderColor: '#ddd',
      flexDirection: 'row'
    },
  
    imageMeta: {
      paddingTop: 10,
      paddingLeft: 10,
      flexDirection: 'row'
    },
  
    thumbnail: {
      width: 50,
      height: 50,
      borderRadius: 25
    },
  
    photo: {
      width: null,
      flex: 1,
      alignItems: 'center',
      height: 300
    },
  
    userName: {
      fontSize: 15,
      fontWeight: 'bold',
      paddingLeft: 5
    },
  
    userContainer: {
        justifyContent: 'center',
        padding: 5,
    },

    heartContainer: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      paddingLeft: 10,
      paddingTop: 10,
      paddingBottom: 5
    }
  };
  
