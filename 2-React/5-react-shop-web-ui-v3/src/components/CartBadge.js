import React from 'react'

export default (props) => {
    return (
        <div>
            <i className="fa fa-shopping-cart"></i> {props.cart.length} item(s) in cart
        </div>
    )
}