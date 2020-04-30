import AlbumsReducer from './AlbumsReducer'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    albums: AlbumsReducer
})

export default allReducers;