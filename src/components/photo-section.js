import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class PhotoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


 /* render() {
    //const { user_avatar, caption, username, image } = this.props.photo;

    return (
      <View style={styles.container}>
        <View style={styles.thumbnailSection}>
          <Image
            style={styles.thumbnail}
            source={{uri: 'https://png.pngtree.com/element_our/png_detail/20181206/users-vector-icon-png_260862.jpg'}} />
          <View style={styles.titleContainer}>
            <Text style={styles.userName}>username</Text>
          </View>
        </View>

        <View>
          <Image 
            style={{width: null, height: 400}}
            source={{uri: 'https://staticfanpage.akamaized.net/wp-content/uploads/sites/21/2016/03/Come-preparare-i-macarons-i-consigli-per-un-ripieno-perfetto.jpg'}} />
        </View>


        <View style={styles.imageMeta}>
          <Text> <Text style={styles.userName}>username</Text> caption</Text>
        </View>
      </View>
    );
  }
};


const styles = {
  titleContainer: {
    justifyContent: 'space-around'
  },

  container: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10
  },

  thumbnailSection: {
    borderBottomWidth: 1,
    padding: 5,
    justifyContent: 'flex-start',
    borderColor: '#ddd',
    backgroundColor: '#ff0000',
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

  heartContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 5   
  }
};





*/

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
              <Ionicons 
                name='ios-heart-empty'
                size={30}
                />
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
  
