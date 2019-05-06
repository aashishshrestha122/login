/*
 *
 * Testimonial reducer
 *
 */
import { POST_REQUEST, POST_SUCCESS, POST_ERROR } from './constants';

export const initialState = {
  data: [],
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
      return {...state}
    }
    default:
    return state;
  }
};
export default postContainerReducer;
