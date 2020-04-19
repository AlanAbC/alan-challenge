import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userProfile from './userProfile';


export default combineReducers({
  routing: routerReducer, userProfile
});
