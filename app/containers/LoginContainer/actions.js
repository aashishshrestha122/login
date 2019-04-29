/*
 *
 * LoginContainer actions
 *
 */

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './constants';
// console.log("actions");
export const loginRequest = data =>
  // console.log(data);
  ({
    type: LOGIN_REQUEST,
    data,
  });
// fetch('localhost:3005/api/login').then(
//   res =>
//   dispatch({
//     type: LOGIN_SUCCESS,
//     data
//   }),
//   error =>
//   dispatch({
//     type: LOGIN_ERROR,
//     error
//   })
// )
export const loginSuccess = events => ({
  type: LOGIN_SUCCESS,
  events,
});
export const loginError = error => ({
  type: LOGIN_ERROR,
  error,
});
