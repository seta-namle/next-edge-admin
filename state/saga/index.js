/* global fetch */

import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

es6promise.polyfill()

function* rootSaga() {
  yield all([

  ])
}

export default rootSaga