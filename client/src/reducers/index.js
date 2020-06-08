import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';
// this file is the Root Reducer

export default combineReducers({
  alert,
  auth,
  profile,
  post,
});
