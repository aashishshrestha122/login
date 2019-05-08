/*
 *
 * Testimonial reducer
 *
 */
import {
  POST_REQUEST,
  POST_SUCCESS,
  POST_ERROR,
  GET_DATA_BY_ID_REQUEST,
  GET_DATA_BY_ID_SUCCESS,
  GET_DATA_BY_ID_FAILURE,
} from './constants';

export const initialState = {
  data: [],
  testimonialByIdData: {}
};

const postContainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REQUEST: {
      return { ...state };
    }
    case POST_SUCCESS: {
      return { action };
    }
    case POST_ERROR: {
      return { ...state };
    }
    case GET_DATA_BY_ID_REQUEST: {
      return { ...state };
    }
    case GET_DATA_BY_ID_SUCCESS: {
      return {  action };
    }
    case GET_DATA_BY_ID_FAILURE: {
      return { ...state };
    }
    default:
      return state;
  }
};
export default postContainerReducer;
