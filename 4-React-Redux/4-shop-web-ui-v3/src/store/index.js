


import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension';


let preloadedState = {
    products: [],
    reviews: {},
    cart: []
}

let middlewares = [thunk]

const store = createStore(rootReducer, preloadedState, composeWithDevTools(
    applyMiddleware(...middlewares)
))


export default store;