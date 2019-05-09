/*
 *
 * Gettestimonial reducer
 *
 */
import produce from 'immer';
import * as types from './constants';

export const initialState = {
  deleteResponse: '',
  dataList: []
};

/* eslint-disable default-case, no-param-reassign */
const gettestimonialReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_REQUEST: {
      return { state };
    }
    case types.GET_SUCCESS: {
      // console.log(action);
      // console.log(action.json.data.dataList);
      return { dataList: action.json.data.dataList };
    }
    case types.GET_ERROR: {
      return { ...state };
    }
    case types.DEL_REQUEST: {
      return { state };
    }
    case types.DEL_SUCCESS: {
      // console.log(action);
      return { deleteResponse: action };
    }
    case types.DEL_FAILURE: {
      return { ...state };
    }
    default:
      return state;
  }
};

export default gettestimonialReducer;
