console.log('-index.js-');
import 'bootstrap/dist/css/bootstrap.css';

import { combineReducers, createStore } from 'redux'

//step-1: action(s)
//-------------------------------------------------------------------

const LOAD_PRODUCTS = 'LOAD_PRODUCTS'
const LOAD_REVIEWS = 'LOAD_REVIEWS'
const ADD_NEW_REVIEW = 'ADD_NEW_REVIEW'
const BUY = 'BUY'


//-------------------------------------------------------------------


// step-2: create action(s)
//-------------------------------------------------------------------

function loadProducts(category, limit) {
    //.....
    let products = [
        {
            id: 111,
            name: 'Laptop',
            price: 198000,
            canBuy: true,
            imagePath: 'images/Laptop.png',
            description: 'New Mac pro'
        },
        {
            id: 222,
            name: 'Mobile',
            price: 18000,
            canBuy: true,
            imagePath: 'images/Mobile.png',
            description: 'New pro'
        }
    ]
    return { type: LOAD_PRODUCTS, products }
}

function loadReviews(productId) {
    //..
    let reviews = [
        { stars: 5, author: 'who@email.com', body: 'sample-review-1' },
        { stars: 1, author: 'who@email.com', body: 'sample-review-2' }
    ]
    return { type: LOAD_REVIEWS, reviews, productId }
}


function addNewReview(review, productId) {
    //..
    return { type: ADD_NEW_REVIEW, review, productId }
}

function buy(item, qty) {
    return { type: BUY, item, qty }
}


//-------------------------------------------------------------------

// step-3: reducer(s)
//-------------------------------------------------------------------

function productsReducer(state = [], action) {
    console.log('productsReducer()');
    switch (action.type) {
        case LOAD_PRODUCTS: {
            let { products } = action;
            return [...state, ...products] // your business logic
        }
        case BUY: {
            let { item } = action
            return state.filter(product => product.id !== item.id)
        }
        default:
            return state;
    }
}

/*

{
    '111':[
        ..
    ],
    '222':[
        ...
    ]
}

*/

function reviewsReducer(state = {}, action) {
    console.log('reviewsReducer()');
    switch (action.type) {
        case LOAD_REVIEWS: {
            let { reviews, productId } = action;
            let existingReviews = state[productId] || [];
            let newReviews = [...existingReviews, ...reviews]
            return Object.assign({}, state, { [productId]: newReviews })
        }
        case ADD_NEW_REVIEW: {
            let { review, productId } = action;
            let existingReviews = state[productId] || [];
            let newReviews = [...existingReviews, review]
            return Object.assign({}, state, { [productId]: newReviews })
        }
        default:
            return state;
    }
}

function cartReducer(state = [], action) {
    switch (action.type) {
        case BUY: {
            let { item } = action
            return [...state, item]
        }
        default:
            return state
    }
}


// combine all reduces to rootReducer

const rootReducer = combineReducers({
    products: productsReducer,
    reviews: reviewsReducer,
    cart: cartReducer
})



// step-4: create store with rootReducer
//-------------------------------------------------------------------

// const store = createStore(rootReducer);

let preloadedState = {
    products: [],
    reviews: {},
    cart: []
}

const store = createStore(
    rootReducer, preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


//-------------------------------------------------------------------



// View / UI ==> ( plain-js-view / jquery / NG  / React )

//--------------------------------------------------------------------------------
let loadProductsBtn = document.getElementById('load_products');
loadProductsBtn.addEventListener('click', e => {
    let action = loadProducts('elec', 2);
    console.log('dispatching LOAD_PRODUCTS action');
    store.dispatch(action);

})
let loadReviewsLapBtn = document.getElementById('load_reviews_lap');
loadReviewsLapBtn.addEventListener('click', e => {
    let action = loadReviews(111);
    console.log('dispatching LOAD_REVIEWS action');
    store.dispatch(action);
})
let loadReviewsMobBtn = document.getElementById('load_reviews_mob');
loadReviewsMobBtn.addEventListener('click', e => {
    let action = loadReviews(222);
    console.log('dispatching LOAD_REVIEWS action');
    store.dispatch(action);
})
let addNewReviewLapBtn = document.getElementById('add_new_review_lap');
addNewReviewLapBtn.addEventListener('click', e => {
    let action = addNewReview({ stars: 1, author: 'who', body: '' }, 111)
    console.log('dispatching ADD_NEW_REVIEW action');
    store.dispatch(action);
})
let addNewReviewMobBtn = document.getElementById('add_new_review_mob');
addNewReviewMobBtn.addEventListener('click', e => {
    let action = addNewReview({ stars: 1, author: 'who', body: '' }, 222)
    console.log('dispatching ADD_NEW_REVIEW action');
    store.dispatch(action);
})
let buyBtn = document.getElementById('buy_btn');
buyBtn.addEventListener('click', e => {
    let action = buy({ id: 111 }, 1)
    console.log('dispatching BUY action');
    store.dispatch(action);
})

//--------------------------------------------------------------------------------

// ProductListView
store.subscribe(() => {
    let state = store.getState();
    let products = state.products
    console.log('ProductListView :: subscribing state')
    console.log(products)
})

// ProductView
store.subscribe(() => {
    let state = store.getState();
    let reviews = state.reviews
    console.log('ProductView :: subscribing state')
    console.log(reviews)
})

// cartView
store.subscribe(() => {
    let state = store.getState();
    let cart = state.cart
    console.log('CartView :: subscribing state')
    console.log(cart)
})