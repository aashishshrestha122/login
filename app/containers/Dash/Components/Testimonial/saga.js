import { put, takeLatest, all } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import axios from 'axios';

console.log('post sagas');
function* Req(action) {
  try {
    // console.log(action.data);
    let form_Data = new FormData();
    form_Data.append('imageName', action.file);
    form_Data.append('data', action.data);
    // console.log(">>>>>>>",form_Data)
    const content = yield axios({
      method: 'post',
      url: 'http://192.168.10.7:3005/api/testimonial/',
      headers: {
        // 'Content-Type': 'multipart/form-data',
        Authorization: localStorage.getItem('token'),
      },
      data: { form_Data },
    });

    yield put({ type: 'POST_SUCCESS', json: content });
    console.log(json);
  } catch (error) {
    console.log(error, 'error');
    // alert('Failed To Post Testimonial');
  }
}

function* actionWatcher() {
  yield takeLatest('POST_REQUEST', Req);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
