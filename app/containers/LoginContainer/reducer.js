/*
 *
 * LoginContainer reducer
 *
 */
console.log('REDUCERS');
import produce from 'immer';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './constants';

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
      // console.log(action.data);
      return { ...state, loading: true };
    }

    case LOGIN_SUCCESS:
      console.log(action.json.data);
      localStorage.setItem('token', action.json.data.token);
      // console.log(localStorage);
      return { action, loading: false, error: false };
      

    // case LOGIN_ERROR:
      // return state.set('loading', false).set('error', action.error);
    default:
      return state;
  }
};
export default loginContainerReducer;
