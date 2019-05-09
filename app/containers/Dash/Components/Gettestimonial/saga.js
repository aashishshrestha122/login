import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import * as types from './constants'
// import API 

// console.log('post sagas');
function* Req() {
  try {
    const content = yield  axios({
      method: 'get',
      url: 'http://192.168.31.24:3005/api/testimonial/',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    // console.log(content.data.dataList);

    yield put({ type: types.GET_SUCCESS, json: content });
    console.log(json);
  } catch (error) {
    // console.log(error, 'error');
  }
}

function* Del(action) {
  // console.log(action.id)
  try {
    const id = action.id
    // console.log(id);
    const content = yield  axios({
      method: 'patch',
      url: `http://192.168.31.24:3005/api/testimonial/${id}`,
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    // console.log(content.data.dataList);

    yield put({ type: types.DEL_SUCCESS, json: content });
    console.log(json);
  } catch (error) {
    // console.log(error, 'error');
  }
}

function* actionWatcher() {
  yield takeLatest(types.GET_REQUEST, Req);
  yield takeLatest(types.DEL_REQUEST, Del);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
