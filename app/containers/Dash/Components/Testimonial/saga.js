import { put, takeLatest, all } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import axios from 'axios';

console.log('post sagas');
function* Req(action) {
  try {
    const content = yield axios({
      method: 'post',
      url: 'http://192.168.10.19:3005/api/testimonial/',
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: localStorage.getItem('token'),
      },
      data: {
        personName: action.data.personName,
        testimonialContent: action.data.testimonialContent,
        organization: action.data.organization,
        message: action.data.message,
      },
    });

    yield put({ type: 'POST_SUCCESS', json: content });
    console.log(json);
  } catch (error) {
    console.log('error');
    // alert('Failed To Post Testimonial');
  }
}

function* actionWatcher() {
  yield takeLatest('POST_REQUEST', Req);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
