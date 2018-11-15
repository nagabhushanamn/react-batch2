import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Product from './components/Product';
import CartBadge from './components/CartBadge';
import ViewCart from './components/ViewCart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      isCartOpen: false,
      products: [
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
    };
  }

  toggleCart() {
    let { isCartOpen } = this.state;
    this.setState({ isCartOpen: !isCartOpen })
  }

  addToCart(item, qty) {
    let { cart } = this.state;
    cart = cart.concat(item);
    this.setState({ cart })
  }

  renderProducts() {
    let { products, isCartOpen, cart } = this.state;
    if (isCartOpen) return <ViewCart cart={cart} />
    else
      return products.map((product, idx) => {
        return (
          <div key={idx} className="list-group-item">
            <Product product={product} onBuy={(item, qty) => this.addToCart(item, qty)} />
          </div>
        )
      })
  }

  render() {
    let { cart, isCartOpen } = this.state;
    return (
      <div className="container">
        <NavBar title="online-shopping" />
        <hr />
        <CartBadge cart={cart} />
        <hr />
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a onClick={e => this.toggleCart()} className="nav-link" href="/#">{isCartOpen ? 'View products' : 'View cart'}</a>
          </li>
        </ul>
        <hr />
        {this.renderProducts()}
      </div>
    );
  }
}

export default App;
