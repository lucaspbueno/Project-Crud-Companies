export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const CLEAR_STATE_LOGIN = 'CLEAR_STATE_LOGIN';

export const loginDone = (token) => ({
  type: LOGIN_SUCCESSFUL,
  token
});

export const clearStageLogin = () => ({
  type: CLEAR_STATE_LOGIN
});