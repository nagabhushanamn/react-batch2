import React, { Component } from 'react';

class Box extends Component {
    renderChildren() {
        let { children } = this.props;
        return children.map((child, idx) => {
            return (
                <div className="list-group-item" key={idx}>
                    {child}
                </div>
            )
        })
    }
    render() {
        return (
            <div className="jumbotron">
                {this.renderChildren()}
            </div>
        );
    }
}

export default Box;