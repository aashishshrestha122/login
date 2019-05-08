/*
 *
 * Testimonial actions
 *
 */

console.log('post actions');
// console.log(data);
import action from '../../../../utils/action';
import * as types from './constants';

// export const postRequest = (data,file) => ({
//   type: POST_REQUEST,
//   data,
//   file
// });

//action accessed from actionhelpers in utils
export const postRequest = action (types.POST_REQUEST,'data','file')
export const getDataByIdRequest = action (types.GET_DATA_BY_ID_REQUEST,'id')
export const getDataByIdSuccess = action (types.GET_DATA_BY_ID_SUCCESS,'id')
export const getDataByIdFailure = action(types.GET_DATA_BY_ID_FAILURE, 'id')
export const putRequest = action(types.PUT_REQUEST, 'data', 'file', 'id')