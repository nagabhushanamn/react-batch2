
import { LOAD_REVIEWS, ADD_NEW_REVIEW } from '../constants'

export function reviewsReducer(state = {}, action) {
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
