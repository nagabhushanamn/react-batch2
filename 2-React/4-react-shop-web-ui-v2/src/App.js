import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Product from './components/Product';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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


  renderProducts() {
    let { products} = this.state;
    return products.map((product, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <Product product={product} />
        </div>
      )
    })
  }

  render() {
    return (
      <div className="container">
        <NavBar title="online-shopping" />
        <hr />
        <hr />
        {this.renderProducts()}
      </div>
    );
  }
}

export default App;
