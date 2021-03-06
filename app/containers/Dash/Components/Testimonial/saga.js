import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import * as types from './constants';

function* Req(action) {
  try {
    // console.log(action.file);
    let form_Data = new FormData();
    // form_Data.append('imageName', action.file);
    form_Data.append('personName', action.data.personName);
    form_Data.append('testimonialContent', action.data.testimonialContent);
    form_Data.append('organization', action.data.organization);
    // form_Data.append('message', action.data.message);
    console.log('>>>>>>>', form_Data);
    // for (var key of form_Data.entries()) {
    //   console.log(key[0] + ', ' + key[1]);
    // }
    // let imageName = action.file.name;
    const content = yield axios({
      method: 'post',
      url: 'http://192.168.10.18:3005/api/testimonial/',
      headers: {
        // 'Content-Type': 'multipart/form-data',
        Authorization: localStorage.getItem('token'),
      },
      imageName: action.file,
      data: form_Data,
    });

    yield put({ type: types.POST_SUCCESS, json: content });
  } catch (error) {
    console.log(error, 'error');
    // alert('Failed To Post Testimonial');
  }
}

function* getDataByIdRequest(action) {
  // console.log("hehreh",action.id)
  try {
    const id = action.id;
    const response = yield axios({
      method: 'get',
      url: `http://192.168.10.18:3005/api/testimonial/${id}`,
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    // console.log(response.data);
    yield put({ type: types.GET_DATA_BY_ID_SUCCESS, res: response });
    console.log(res);
  } catch (error) {
    // console.log('error');
  }
}

function* putReq(action) {
  try {
    const id = action.id;
    // console.log(action.file);
    let form_Data = new FormData();
    // form_Data.append('imageName', action.file);
    form_Data.append('personName', action.data.personName);
    form_Data.append('testimonialContent', action.data.testimonialContent);
    form_Data.append('organization', action.data.organization);
    // form_Data.append('message', action.data.message);

    const content = yield axios({
      method: 'put',
      url: `http://192.168.10.18:3005/api/testimonial/${id}`,
      headers: {
        // 'Content-Type': 'multipart/form-data',
        Authorization: localStorage.getItem('token'),
      },
      imageName: action.file,
      data: form_Data,
    });

    yield put({ type: types.PUT_SUCCESS, json: content });
  } catch (error) {
    console.log(error, 'error');
    // alert('Failed To Post Testimonial');
  }
}

function* actionWatcher() {
  yield takeLatest(types.GET_DATA_BY_ID_REQUEST, getDataByIdRequest);
  yield takeLatest(types.POST_REQUEST, Req);
  yield takeLatest(types.PUT_REQUEST, putReq);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
