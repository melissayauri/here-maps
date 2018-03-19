import { combineReducers } from 'redux';
import mimap from './reducer-section';


const rootReducer = combineReducers ({
  mapita : mimap
  
});

export default rootReducer;