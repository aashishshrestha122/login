/*
 *
 * LoginContainer reducer
 *
 */
import produce from 'immer';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './constants';

export const initialState = {
  data: [],
  events: [],
  loading: false,
  error: true,
};

/* eslint-disable default-case, no-param-reassign */
const loginContainerReducer = (state = initialState, action) => {
  console.log('SUCCESS');
  switch (action.type) {
    case LOGIN_REQUEST: {
      return state.set('loading', true).set('error', false);
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
