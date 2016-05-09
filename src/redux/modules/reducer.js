import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';

import site from './site';
import pokemon from './pokemon';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  site,
  pokemon
});
