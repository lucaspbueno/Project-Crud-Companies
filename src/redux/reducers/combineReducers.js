import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import formReducer from './formReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({ 
  login: loginReducer,
  form: formReducer,
  page: themeReducer
});

export default rootReducer;