import React, { Component } from 'react';
import NavBar from './components/NavBar';
import classNames from 'classnames';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
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

  changeTab(tabIndex) {
    this.setState({ tab: tabIndex })
  }

  renderBuyBtn(product) {
    if (product.canBuy) return (<button className="btn btn-sm btn-primary">buy</button>)
    else return null;
  }

  renderTabPanel(product) {
    let { tab } = this.state;
    let panel;
    switch (tab) {
      case 1: {
        panel = (<div>{product.description}</div>)
        break;
      }
      case 2: {
        panel = (<div>Not Yet</div>)
        break;
      }
      case 3: {
        panel = (<div>None Yet</div>)
        break;
      } default:
        panel = null
    }
    return panel;
  }
  renderProducts() {
    let { products, tab } = this.state;
    return products.map((product, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <div className="row">
            <div className="col-3 col-sm-3 col-md-3">
              <img src={product.imagePath} className="img-fluid" alt={product.name} />
            </div>
            <div className="col-9 col-sm-9 col-md-9">
              <h5>{product.name}</h5>
              <h6>&#8377;{product.price}</h6>
              {this.renderBuyBtn(product)}
              <hr />
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className={`nav-link ${tab === 1 ? 'active' : ''}`} onClick={e => this.changeTab(1)} href="/#">Description</a>
                </li>
                <li className="nav-item">
                  <a className={classNames('nav-link', { active: tab === 2 })} onClick={e => this.changeTab(2)} href="/#">Specification</a>
                </li>
                <li className="nav-item">
                  <a className={classNames('nav-link', { active: tab === 3 })} onClick={e => this.changeTab(3)} href="/#">Reviews</a>
                </li>
              </ul>

              {this.renderTabPanel(product)}

            </div>
          </div>
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
