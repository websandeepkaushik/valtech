import { all, fork } from 'redux-saga/effects';
import {watchDevelopersData, watchDevelopersPostData, watchDevelopersUpdateData, watchDevelopersDeleteData} from './DevelopersData';

export default function* rootSaga() {
  yield all([
    fork(watchDevelopersData),
    fork(watchDevelopersPostData),
    fork(watchDevelopersUpdateData),
    fork(watchDevelopersDeleteData)
  ])
}