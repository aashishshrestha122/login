import { put, takeLatest, all } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import axios from 'axios';

console.log('sagas');
// console.log(this.login);
function* loginAuth(action) {
  const auth = yield axios({
    method: 'post',
    url: 'http://localhost:3005/api/login',
    data: {
      username: action.data.username,
      password: action.data.password,
    },
  });

  yield put({ type: 'LOGIN_SUCCESS', json: auth });
  //routes to home page if success
  yield put(push('/home'));
}

function* actionWatcher() {
  yield takeLatest('LOGIN_REQUEST', loginAuth);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
