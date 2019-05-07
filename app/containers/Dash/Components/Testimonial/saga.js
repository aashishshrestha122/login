import { put, takeLatest, all } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import axios from 'axios';

console.log('post sagas');
function* Req(action) {
  try {
    console.log(action.file);
    let form_Data = new FormData();
    // form_Data.append('imageName', action.file);
    form_Data.append('personName', action.data.personName);
    form_Data.append('testimonialContent', action.data.testimonialContent);
    form_Data.append('organization', action.data.organization);
    form_Data.append('message', action.data.message);
    console.log('>>>>>>>', form_Data);
    // for (var key of form_Data.entries()) {
    //   console.log(key[0] + ', ' + key[1]);
    // }
    let imageName = action.file.name;
    const content = yield axios({
      method: 'post',
      url: 'http://localhost:3005/api/testimonial/',
      headers: {
        // 'Content-Type': 'multipart/form-data',
        Authorization: localStorage.getItem('token'),
        imageName: action.file,
      },
      data: form_Data,
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
