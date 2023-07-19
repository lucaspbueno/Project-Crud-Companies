import { TOGGLE_THEME } from "../actions/actionsTheme";

const INITIAL_STATE = { 
  theme: 'light',
};

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        theme: state.theme === 'dark' ? 'light' : 'dark'
      }
    default:
      return state;
  }

};

export default themeReducer;
