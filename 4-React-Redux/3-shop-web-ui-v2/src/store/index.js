


import { createStore } from 'redux'
import rootReducer from '../reducers'

import { composeWithDevTools } from 'redux-devtools-extension';


let preloadedState = {
    products: [],
    reviews: {},
    cart: []
}

const store = createStore(rootReducer, preloadedState, composeWithDevTools())


export default store;