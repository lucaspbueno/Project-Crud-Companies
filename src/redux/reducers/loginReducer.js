import { LOGIN_SUCCESSFUL } from "../actions/actionsLogin";

const INITIAL_STATE = { 
  token: '',
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
      return {
        token: action.token
      }
    default:
      return state;
  }

};

export default loginReducer;
