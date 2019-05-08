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