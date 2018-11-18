


import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

import { composeWithDevTools } from 'redux-devtools-extension';


let preloadedState = {
    products: [],
    reviews: {},
    cart: [],
    status: {}
}

const sagaMiddleware = createSagaMiddleware()

let middlewares = [thunk, sagaMiddleware]

const store = createStore(rootReducer, preloadedState, composeWithDevTools(
    applyMiddleware(...middlewares)
))

sagaMiddleware.run(rootSaga)


export default store;