export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';

export const loginDone = (token) => ({
  type: LOGIN_SUCCESSFUL,
  token
});
