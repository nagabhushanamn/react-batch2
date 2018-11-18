

import { combineReducers } from 'redux'

import { productsReducer } from './products'
import { reviewsReducer } from './reviews'
import { cartReducer } from './cart'
import { loadingStatus } from './loading-status'


export default combineReducers({
    products: productsReducer,
    reviews: reviewsReducer,
    cart: cartReducer,
    status: loadingStatus
})