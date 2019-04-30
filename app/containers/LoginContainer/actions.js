/*
 *
 * LoginContainer actions
 *
 */

console.log('actions');
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './constants';

export const loginRequest = data => ({
  type: LOGIN_REQUEST,
  data,
});
// console.log(data);
export const loginSuccess = events => ({
  type: LOGIN_SUCCESS,
  events,
});
export const loginError = error => ({
  type: LOGIN_ERROR,
  error,
});
