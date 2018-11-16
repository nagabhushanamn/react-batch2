import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Product from './components/Product';
import CartBadge from './components/CartBadge';
import ViewCart from './components/ViewCart';
import Home from './components/Home'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      products: []
    };
  }
 
  componentDidMount() {
    let api = 'http://localhost:8080/api/products';

    fetch(api)
      .then(response => response.json())
      .then(products => {
        this.setState({ products })
      })

  }

  addToCart(item, qty) {
    let { cart } = this.state;
    cart = cart.concat(item);
    this.setState({ cart })
  }

  renderProducts() {
    let { products } = this.state;
    return products.map((product, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <Product product={product} onBuy={(item, qty) => this.addToCart(item, qty)} />
        </div>
      )
    })
  }

  render() {
    let { cart } = this.state;
    return (
      <div className="container">
        <NavBar title="online-shopping" />

        <Router>
          <div>
            <hr />
            <CartBadge cart={cart} />
            <hr />
            
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart</Link>
              </li>
            </ul>
            <hr />

            <Route path="/" exact={true} component={Home} />
            <Route path="/products" render={() => this.renderProducts()} />
            <Route path="/cart" render={() => <ViewCart cart={cart} />} />

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
