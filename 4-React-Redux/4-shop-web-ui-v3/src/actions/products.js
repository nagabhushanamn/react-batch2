

import { LOAD_PRODUCTS } from '../constants'

export function loadProducts(category, limit) {
    //.....

    let api = 'http://localhost:8080/api/products'

    //let products=[{},{}]
    //return { type: LOAD_PRODUCTS, products } // sync action

    return function (dispatch) {
        fetch(api)
            .then(response => response.json())
            .then(products => {
                dispatch({ type: LOAD_PRODUCTS, products }) // Async Action
            })
    }

}

//

function addNewProduct() {
    //..
}