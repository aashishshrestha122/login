/*
 *
 * Testimonial reducer
 *
 */
import * as types from './constants';

export const initialState = {
  data: [],
  testimonialByIdData: {},
};

const postContainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POST_REQUEST: {
      return { ...state };
    }
    case types.POST_SUCCESS: {
      return { action };
    }
    case types.POST_ERROR: {
      return { ...state };
    }
    case types.GET_DATA_BY_ID_REQUEST: {
      return { state };
    }
    case types.GET_DATA_BY_ID_SUCCESS: {
      // console.log(action.res.data);
      // console.log(action);
      return { testimonialByIdData: action.res.data };
    }
    case types.GET_DATA_BY_ID_FAILURE: {
      return { ...state };
    }
    case types.PUT_REQUEST: {
      return { ...state };
    }
    case types.PUT_SUCCESS: {
      return { action };
    }
    case types.PUT_ERROR: {
      return { ...state };
    }
    default:
      return state;
  }
};
export default postContainerReducer;
