// import { put, takeLatest, all } from 'redux-saga/effects';
// import * as types from './actions';

// console.log('sagas');
// function* loginAuth() {
//   const auth = yield fetch('localhost:3005/api/login/')
//     .then(res => res.json())
//     .then(data => {
//       dispatch({
//         type: LOGIN_SUCCESS,
//         data,
//       }).catch(error => {
//         dispatch({
//           type: LOGIN_ERROR,
//           error,
//         });
//       });
//     });
//   yield put({ type: 'REQUEST', json: json.articles });
// }

// function* actionWatcher() {
//   yield takeLatest('SUCCESS', loginAuth);
// }

// export default function* rootSaga() {
//   yield all([actionWatcher()]);
// }

// // console.log(tae);
