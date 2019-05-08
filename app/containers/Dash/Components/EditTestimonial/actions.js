/*
 *
 * EditTestimonial actions
 *
 */

console.log('edit actions');
// console.log(data);
// import { EDIT_REQUEST } from './constants';

// export const editRequest = () => ({
//   type: EDIT_REQUEST,
// });
import action from '../../../../utils/action';
import * as types from './constants';

export const editRequest = action(types.EDIT_REQUEST)