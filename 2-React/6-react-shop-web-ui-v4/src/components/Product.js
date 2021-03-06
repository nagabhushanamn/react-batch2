import React, { Component } from 'react';
import classNames from 'classnames';
import Review from './Review';
import ReviewForm from './ReviewForm_v2';

class Product extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            tab: 1,
            reviews: []
        }
    }
     
    changeTab(tabIndex) {
        this.setState({ tab: tabIndex }, () => {
            if (tabIndex === 3) {
                let id = this.props.product.id;
                let api = `http://0.0.0.0:8080/api/products/${id}/reviews`
                fetch(api)
                    .then(response => response.json())
                    .then(reviews => {
                        reviews = reviews || []
                        this.setState({ reviews })
                    })
            }
        })
    }
    handleNewReview(review) {
        let id = this.props.product.id;
        let api = `http://0.0.0.0:8080/api/products/${id}/reviews`
        fetch(api, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        })
            .then(response => response.json())
            .then(reviesavedReview => {
                let { reviews } = this.state;
                reviews = reviews.concat(reviesavedReview);
                this.setState({ reviews });
            })

    }

    renderBuyBtn(product) {
        let { onBuy } = this.props;
        if (product.canBuy) return (<button onClick={e => onBuy(product, 1)} className="btn btn-sm btn-primary">buy</button>)
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
                panel = (
                    <div>
                        {this.renderReviews()}
                        <hr />
                        <ReviewForm onNewReview={review => this.handleNewReview(review)} />
                    </div>)
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
                    <img src={product.image} className="img-fluid" alt={product.name} />
                </div>
                <div className="col-9 col-sm-9 col-md-9">
                    <h5>{product.name}</h5>
                    <h6>&#8377;{product.price}</h6>
                    {this.renderBuyBtn(product)}
                    <hr />
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className={`nav-link ${tab === 1 ? 'active' : ''}`} onClick={e => this.changeTab(1)} href="#">Description</a>
                        </li>
                        <li className="nav-item">
                            <a className={classNames('nav-link', { active: tab === 2 })} onClick={e => this.changeTab(2)} href="#">Specification</a>
                        </li>
                        <li className="nav-item">
                            <a className={classNames('nav-link', { active: tab === 3 })} onClick={e => this.changeTab(3)} href="#">Reviews</a>
                        </li>
                    </ul>
                    {this.renderTabPanel(product)}
                </div>
            </div>
        );
    }
}

export default Product;