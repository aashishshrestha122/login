/*
 *
 * Gettestimonial reducer
 *
 */
import produce from 'immer';
import { GET_REQUEST, GET_SUCCESS, GET_ERROR } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const gettestimonialReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REQUEST: {
      return { state };
    }
    case GET_SUCCESS: {
      // console.log(action);  
      // console.log(action.json.data.dataList);
      return { response : action.json.data.dataList };
    }
    case GET_ERROR: {
      return { ...state };
    }
    default:
      return state;
  }
};

export default gettestimonialReducer;
