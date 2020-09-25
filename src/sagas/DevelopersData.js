import { put, takeLatest } from 'redux-saga/effects';
import ApiCall from '../api';
import { saveResponseData, saveResponseError } from '../state/DevelopersData';

/**
 * saga generator function used in fetching DevelopersData
 * @param {Object} action - contain type and payload
 */
export function* fetchDevelopers(action) {
    const response = yield ApiCall(action);
    if (response.data) {
      yield put(saveResponseData(response.data))
    } else {
      yield put(saveResponseError([]))
    }
  }
  
  export function* watchDevelopersData() {
    yield takeLatest('FETCH_DEVELOPERSDATA', fetchDevelopers);
  }

/**
 * saga generator function used in save DevelopersData
 * @param {Object} action - contain type and payload
 */
export function* saveDevelopersData(action) {
  const response = yield ApiCall(action);
  if (response.data) {
    yield put(saveResponseData(response.data))
  } else {
    yield put(saveResponseError([]))
  }
}
  export function* watchDevelopersPostData() {
    yield takeLatest('SAVE_DEVELOPERSDATA', saveDevelopersData);
  }


/**
 * saga generator function used in update DevelopersData
 * @param {Object} action - contain type and payload
 */
export function* updateDevelopersData(action) {
  const response = yield ApiCall(action);
  if (response.data) {
    yield put(saveResponseData(response.data))
  } else {
    yield put(saveResponseError([]))
  }
}
  export function* watchDevelopersUpdateData() {
    yield takeLatest('UPDATE_DEVELOPERSDATA', updateDevelopersData);
  }

/**
 * saga generator function used in delete data from DevelopersData
 * @param {Object} action - contain type and payload
 */
export function* deleteDevelopersData(action) {
  const response = yield ApiCall(action);
  if (response.data) {
    yield put(saveResponseData(response.data))
  } else {
    yield put(saveResponseError([]))
  }
}
  export function* watchDevelopersDeleteData() {
    yield takeLatest('DELETE_DEVELOPERSDATA', deleteDevelopersData);
  }