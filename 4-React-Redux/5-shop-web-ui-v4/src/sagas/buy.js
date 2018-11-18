
import { BUY } from '../constants'
import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, call } from 'redux-saga/effects'


import Api from '../api/Api'

function* buyAsync(action) {
    let { item } = action
    //yield delay(3000) 
    yield call(Api.buy, { name: item.name, price: item.price, id: 0 });
    yield put({ type: 'BUY_ASYNC', item })
}

export function* watchBuyAsync() {
    // yield takeEvery(BUY, buyAsync)
    yield takeLatest(BUY, buyAsync)
}