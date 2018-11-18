

import { LOAD_PRODUCTS, REQUEST_BEGIN, REQUEST_SUCCESS, REQUEST_ERROR } from '../constants'

export function loadProducts(category, limit) {
    //.....

    let api = 'http://localhost:8080/api/products'

    //let products=[{},{}]
    //return { type: LOAD_PRODUCTS, products } // sync action

    return function (dispatch) {
        dispatch({ type: REQUEST_BEGIN, message: 'Loading products...' })
        fetch(api)
            .then(response => response.json())
            .then(products => {
                dispatch({ type: LOAD_PRODUCTS, products }) // Async Action
                dispatch({ type: REQUEST_SUCCESS, message: '' })
            })
            .catch(() => {
                dispatch({ type: REQUEST_ERROR, message: 'Failed while loading products' })
            })
    }

}

//

function addNewProduct() {
    //..
}