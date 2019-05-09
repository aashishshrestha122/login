import { put, takeLatest, all } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as types from './constants';
import axios from 'axios';

// console.log('sagas');
// console.log(this.login);
function* loginAuth(action) {
 try { 
   const auth = yield axios({
    method: 'post',
    url: 'http://192.168.10.18:3005/api/login',
    data: {
      username: action.data.username,
      password: action.data.password,
    },
  });

  yield put({ type: types.LOGIN_SUCCESS, json: auth });
  // routes to home page if success
  yield put(push('/dash'));
}
catch(error){
  yield put ({ type : types.LOGIN_ERROR, error:error});
  alert("Invalid Username or Password");
  //routes back to login page 
  yield put (push('/'));
  // console.log("error");
}
}

function* actionWatcher() {
  yield takeLatest(types.LOGIN_REQUEST, loginAuth);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
