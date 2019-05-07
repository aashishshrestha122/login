/*
 *
 * Testimonial actions
 *
 */

console.log('post actions');
// console.log(data);
import { POST_REQUEST } from './constants';

export const postRequest = (data,file) => ({
  type: POST_REQUEST,
  data,
  file
});
