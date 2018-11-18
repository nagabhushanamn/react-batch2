


import { LOAD_REVIEWS, ADD_NEW_REVIEW } from '../constants'

export function loadReviews(productId) {
    //..
    // let reviews = [
    //     { stars: 5, author: 'who@email.com', body: 'sample-review-1' },
    //     { stars: 1, author: 'who@email.com', body: 'sample-review-2' }
    // ]
    // return { type: LOAD_REVIEWS, reviews, productId }

    let api = `http://localhost:8080/api/products/${productId}/reviews`
    return function (dispatch) {
        fetch(api)
            .then(response => response.json())
            .then(reviews => {
                dispatch({ type: LOAD_REVIEWS, reviews, productId }) // Async Action
            })
    }

}


export function addNewReview(review, productId) {
    //..
    //return { type: ADD_NEW_REVIEW, review, productId }

    let api = `http://0.0.0.0:8080/api/products/${productId}/reviews`
    return function (dispatch) {
        fetch(api, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        })
            .then(response => response.json())
            .then(savedReview => {
                dispatch({ type: ADD_NEW_REVIEW, review: savedReview, productId }) // Async Action
            })
    };
}