import {combineReducers} from 'redux'
import PhotosReducer from './photos-reducer'

const rootReducer = combineReducers({
    photos: PhotosReducer
})

export default rootReducer