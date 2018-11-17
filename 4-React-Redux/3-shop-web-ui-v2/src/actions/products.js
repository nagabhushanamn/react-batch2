

import {LOAD_PRODUCTS} from '../constants'

export function loadProducts(category, limit) {
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

//

function addNewProduct(){
    //..
}