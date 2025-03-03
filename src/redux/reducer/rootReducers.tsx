import { combineReducers } from 'redux'

import userReducer from './userReducer';


const rootReducer = combineReducers({

  // specific key name instead of the variable name
  user: userReducer,
  

})

export default rootReducer;