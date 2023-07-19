import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import formReducer from './formReducer';
import pageReducer from './pageReducer';

const rootReducer = combineReducers({ 
  login: loginReducer,
  form: formReducer,
  page: pageReducer
});

export default rootReducer;