import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

console.log('edit sagas');
function* edit() {
  try {
    const content = yield  axios({
      method: 'get',
      url: 'http://192.168.31.26:3005/api/testimonial/',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    // console.log(content.data.dataList);

    yield put({ type: 'EDIT_SUCCESS', json: content });
    // console.log(json);
  } catch (error) {
    // console.log(error, 'error');
  }
}
function* actionWatcher() {
  yield takeLatest('EDIT_REQUEST', edit);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
