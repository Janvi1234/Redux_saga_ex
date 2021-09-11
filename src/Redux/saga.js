import { COLOR } from './action'
import { put } from 'redux-saga/effects'
import { takeLatest } from '@redux-saga/core/effects';
function* colorAsync(action) {
  const color = action.payload
  yield put({ type: "COLOR_CHANGE", payload: color })
}
export function* watchColor() {
  yield takeLatest(COLOR, colorAsync);
}