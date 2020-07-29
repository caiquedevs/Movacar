import { combineReducers } from 'redux';

import auth from './auth/reducer';
import drivers from './drivers/reducer';
import menu from './menu/reducer';
import travels from './travels/reducer';

export default combineReducers({
  auth,
  drivers,
  menu,
  travels,
});
