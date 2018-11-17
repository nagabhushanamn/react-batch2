import React, { Component } from 'react';
import store from '../store';

// export default (props) => {
//     return (
//         <div>
//             <i className="fa fa-shopping-cart"></i> {props.cart.length} item(s) in cart
//         </div>
//     )
// }


class CartBadge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: []
        }
    }
    componentDidMount() {
        store.subscribe(() => {
            let cart = store.getState().cart;
            this.setState({ cart })
        });
    }
    render() {
        let { cart } = this.state;
        return (
            <div>
                <i className="fa fa-shopping-cart"></i> {cart.length} item(s) in cart
              </div>
        );
    }
}

export default CartBadge;