/*
 *
 * Gettestimonial actions
 *
 */

 import action from '../../../../utils/action';
 import * as types from './constants';

console.log('get actions');
// console.log(data);

// export const getRequest = () => ({
//   type: types.GET_REQUEST,
// });
//action accessed from actionhelpers in utils
 export const getRequest = action(types.GET_REQUEST)
