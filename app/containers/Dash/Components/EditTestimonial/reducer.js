/*
 *
 * EditTestimonial reducer
 *
 */
import { EDIT_REQUEST, EDIT_SUCCESS, EDIT_ERROR } from './constants';

export const initialState = {};
// console.log("edit reducer");
/* eslint-disable default-case, no-param-reassign */
const edittestimonialReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_REQUEST: {
      return { state };
    }
    case EDIT_SUCCESS: {
      // console.log("edit reducers");  
      // console.log(action.json.data.dataList);
      return { response : action.json.data.dataList };
    }
    case EDIT_ERROR: {
      return { ...state };
    }
    default:
      return state;
  }
};

export default edittestimonialReducer;