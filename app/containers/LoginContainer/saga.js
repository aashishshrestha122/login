import { fork } from 'redux-saga/effects';
// import watchUserAuthentication from './watchers';

export default function* loginRequest() {
  // yield fork(watchUserAuthentication);
  console.log('saga');
}
