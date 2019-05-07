import { put, takeLatest, all } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import axios from 'axios';

console.log('post sagas');
function* Req() {
  try {
    const content = yield axios({
      method: 'get',
      url: 'http://192.168.10.7:3005/api/testimonial/',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    console.log(content);

    yield put({ type: 'GET_SUCCESS', json: content });
    console.log(json);
  } catch (error) {
    console.log(error, 'error');
  }
}
function* actionWatcher() {
  yield takeLatest('GET_REQUEST', Req);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
