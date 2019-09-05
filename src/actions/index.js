import axios from 'axios'

// Get Local IP
//var NetworkInfo = require('react-native-network-info');



export function getPhotos() {
    console.log('XXX getPhotos')
    const uri = 'http://10.0.0.39:3000';
    console.log(uri)

    return (dispatch) => {
        axios.get(uri+'/photos')
        .then((response) => {
            // Success 🎉
            console.log(response.status);
            dispatch({
                type: 'GET_PHOTOS',
                payload: response.data
            })
        })
    }



    return 
}