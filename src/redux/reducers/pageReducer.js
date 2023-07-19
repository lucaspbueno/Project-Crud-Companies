import { TOGGLE_THEME, SHOW_DROP_DOWN } from "../actions/actionsPage";

const INITIAL_STATE = { 
  theme: 'light',
  dropDownIsActive: false,
};

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        theme: state.theme === 'dark' ? 'light' : 'dark'
      };
    case SHOW_DROP_DOWN:
      return {
        ...state,
        dropDownIsActive: state.dropDownIsActive === false ? true : false
      }
    default:
      return state;
  }

};

export default themeReducer;
