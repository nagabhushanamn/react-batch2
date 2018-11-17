import React, { Component } from 'react';

import { buy } from '../actions/cart'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

function renderCartItems(props) {
    let { cart, buy } = props;
    return cart.map((item, idx) => {
        return (
            <tr key={idx}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>&#8377;{item.price}</td>
                <td>qty</td>
                <td>total</td>
                <td><a onClick={e => buy(item)}><i className="fa fa-plus"></i></a></td>
            </tr>
        )
    })
}

class ViewCart extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12 col-md-8">
                        <div className="card card-default">
                            <div className="card-header">Items in cart</div>
                            <table className="table table-sm table-bordered table-stripped">
                                <tbody>
                                    {renderCartItems(this.props)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        cart: state.cart
    }
}
function mapDispatchToProps(dispatch) {
    return { buy: bindActionCreators(buy, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewCart);