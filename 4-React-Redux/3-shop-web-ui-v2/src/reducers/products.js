
import {LOAD_PRODUCTS} from '../constants'

export function productsReducer(state = [], action) {
    console.log('productsReducer()');

    switch (action.type) {
        case LOAD_PRODUCTS: {
            let { products } = action;
            return [...state, ...products] // UI state logic
        }
        // case BUY: {
        //     let { item } = action
        //     return state.filter(product => product.id !== item.id)
        // }
        default:
            return state;
    }
}