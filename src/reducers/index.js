import { combineReducers } from 'redux'

// Reducers
import AlbumsReducer from './reducer-albums'

const reducers = combineReducers({
  albums: AlbumsReducer
})

export default reducers