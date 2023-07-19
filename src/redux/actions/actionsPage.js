export const TOGGLE_THEME = 'TOGGLE_THEME';
export const SHOW_DROP_DOWN = 'SHOW_DROP_DOWN';
export const CLEAR_STATE_PAGE = 'CLEAR_STATE_PAGE';

export const toggleTheme = () => ({
  type: TOGGLE_THEME
});

export const showDropDown = () => ({
  type: SHOW_DROP_DOWN
});

export const clearStagePage = () => ({
  type: CLEAR_STATE_PAGE
});
