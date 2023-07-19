import { TOGGLE_THEME, SHOW_DROP_DOWN, CLEAR_STATE_PAGE } from "../actions/actionsPage";

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
    case CLEAR_STATE_PAGE:
      return {
        ...INITIAL_STATE,
        theme: state.theme
      };
    default:
      return state;
  }

};

export default themeReducer;
