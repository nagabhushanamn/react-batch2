
import React from 'react'

import 'font-awesome/css/font-awesome.css';

function renderStars(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(<i style={{ color: 'red' }} className="fa fa-star" key={i}></i>)
    }
    return arr;
}

export default (props) => {
    let { review } = props
    return (
        <div className="row">
            <div className="col-sm-12 col-md-8">
                <div className="alert alert-danger">
                    {renderStars(review.stars)} &mdash; {review.author}
                    <hr />
                    {review.body}
                </div>
            </div>
        </div>
    )
}
