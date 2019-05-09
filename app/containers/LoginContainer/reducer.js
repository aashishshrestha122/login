/*
 *
 * LoginContainer reducer
 *
 */
import produce from 'immer';
import * as types from './constants';
import * as jwt from "jwt-decode";
// console.log('REDUCERS');

export const initialState = {
  events: [],
  data: [],
  loading: false,
  error: true,
};
/* eslint-disable default-case, no-param-reassign */
const loginContainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      // console.log(action.data);
      return { ...state, loading: true };
    }

    case types.LOGIN_SUCCESS:
      // console.log(action.json.data);
      localStorage.setItem('token', action.json.data.token);
      const decoded = jwt(localStorage.getItem("token"));
      // console.log(decoded);

      // console.log(localStorage);
      return { action, loading: false, error: false };

    case types.LOGIN_ERROR:{
      // console.log("error");
      return { ...state, loading: false, error: true};
    }
    default:
      return state;
  }
};
export default loginContainerReducer;
