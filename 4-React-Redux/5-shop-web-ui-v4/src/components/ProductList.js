import React, { Component } from 'react';
import Product from './Product';

import { loadProducts } from '../actions/products'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

class ProductList extends Component {

    componentDidMount() {
        let { loadProducts } = this.props;
        loadProducts('elec', 2)
    }
  
    renderProducts() {
        let { products } = this.props;
        return products.map((product, idx) => {
            return (
                <div key={idx} className="list-group-item">
                    <Product product={product} onBuy={(item, qty) => this.addToCart(item, qty)} />
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderProducts()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}
function mapDispatchToProps(dispatch) {
    return { loadProducts: bindActionCreators(loadProducts, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);