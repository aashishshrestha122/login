/*
 *
 * LoginContainer actions
 *
 */
//action accessed from actionhelpers in utils

import action from '../../utils/action';
import * as types from './constants';
console.log("action login");

export const loginRequest = action (types.LOGIN_REQUEST, 'data')
