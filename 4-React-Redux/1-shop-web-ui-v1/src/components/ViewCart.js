import React, { Component } from 'react';
import store from '../store';

import { buy } from '../actions/cart'

function handleBuy(item) {
    let action = buy(item, 1)
    store.dispatch(action)
}

function renderCartItems(cart) {
    return cart.map((item, idx) => {
        return (
            <tr key={idx}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>&#8377;{item.price}</td>
                <td>qty</td>
                <td>total</td>
                <td><a onClick={e => handleBuy(item)}><i className="fa fa-plus"></i></a></td>
            </tr>
        )
    })
}
/*
export default props => {
    return (
        <div className="row">
            <div className="col-sm-12 col-md-8">
                <div className="card card-default">
                    <div className="card-header">Items in cart</div>
                    <table className="table table-sm table-bordered table-stripped">
                        <tbody>
                            {renderCartItems(props.cart)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

*/



class ViewCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: store.getState().cart
        }
    }
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            let cart = store.getState().cart;
            this.setState({ cart })
        });
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        let { cart } = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12 col-md-8">
                        <div className="card card-default">
                            <div className="card-header">Items in cart</div>
                            <table className="table table-sm table-bordered table-stripped">
                                <tbody>
                                    {renderCartItems(cart)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewCart;