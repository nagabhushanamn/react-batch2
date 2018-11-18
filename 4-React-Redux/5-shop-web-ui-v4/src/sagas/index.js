
import { all } from 'redux-saga/effects'

import { watchBuyAsync } from './buy'

export default function* rootSaga() {
    yield all([
        watchBuyAsync()
    ])
}