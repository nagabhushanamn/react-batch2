import React, { Component } from 'react';
import classNames from 'classnames';
import Review from './Review';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 1,
            reviews: [
                { stars: 5, author: 'who@email.com', body: 'sample-review-1' },
                { stars: 1, author: 'who@email.com', body: 'sample-review-2' }
            ]
        }
    }
    changeTab(tabIndex) {
        this.setState({ tab: tabIndex })
    }
    renderBuyBtn(product) {
        if (product.canBuy) return (<button className="btn btn-sm btn-primary">buy</button>)
        else return null;
    }
    renderReviews() {
        let { reviews } = this.state;
        return reviews.map((review, idx) => {
            return <Review review={review} key={idx} />
        })
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
                panel = (<div>{this.renderReviews()}</div>)
                break;
            } default:
                panel = null
        }
        return panel;
    }

    render() {
        let { product } = this.props;
        let { tab } = this.state;
        return (
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
        );
    }
}

export default Product;