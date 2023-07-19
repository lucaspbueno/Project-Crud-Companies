import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import formReducer from './formReducer';

const rootReducer = combineReducers({ 
  login: loginReducer,
  form: formReducer
});

export default rootReducer;