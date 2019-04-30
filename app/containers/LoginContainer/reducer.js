/*
 *
 * LoginContainer reducer
 *
 */
import produce from 'immer';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './constants';
import { loginRequest, loginSuccess, loginError } from './actions';

console.log("REDUCERS");

export const initialState = {
  events: [],
  data: [],
  loading: false,
  error: true,
};
/* eslint-disable default-case, no-param-reassign */
const loginContainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      // console.log("data");kic
      return state.set('loading', true).set('error', false).set(data= [{
        'username':action.username,
        'password':action.password
      }]);
    }

    case LOGIN_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('events', action.events);
    case LOGIN_ERROR:
      return state.set('loading', false).set('error', action.error);
    default:
      return state;
  }
};
export default loginContainerReducer;
