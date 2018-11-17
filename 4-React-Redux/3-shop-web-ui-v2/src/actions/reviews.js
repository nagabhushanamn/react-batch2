


import {LOAD_REVIEWS,ADD_NEW_REVIEW} from '../constants'

export function loadReviews(productId) {
    //..
    let reviews = [
        { stars: 5, author: 'who@email.com', body: 'sample-review-1' },
        { stars: 1, author: 'who@email.com', body: 'sample-review-2' }
    ]
    return { type: LOAD_REVIEWS, reviews, productId }
}


export function addNewReview(review, productId) {
    //..
    return { type: ADD_NEW_REVIEW, review, productId }
}