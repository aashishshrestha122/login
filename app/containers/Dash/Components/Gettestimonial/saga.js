import { put, takeLatest, all, fork } from 'redux-saga/effects';
import axios from 'axios';
import * as types from './constants'
// import API 

console.log('post sagas');
function* Req() {
  try {
    const content = yield  axios({
      method: 'get',
      url: 'http://192.168.31.26:3005/api/testimonial/',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    // console.log(content.data.dataList);

    yield put({ type: 'GET_SUCCESS', json: content });
    console.log(json);
  } catch (error) {
    // console.log(error, 'error');
  }
}
function* actionWatcher() {
  yield takeLatest('GET_REQUEST', Req);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
