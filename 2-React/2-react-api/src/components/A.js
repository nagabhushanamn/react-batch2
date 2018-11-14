import React, { Component } from 'react';
import B from './B';
import PropTypes from 'prop-types'

class A extends Component {
    getChildContext() {
        return { value: this.props.value };
    }
    render() {
        return (
            <div className="card card-default">
                <div className="card-body">
                    <span className="badge badge-dark">A component</span>
                    - {this.props.value}
                    <B />
                </div>
            </div>
        );
    }
}


A.childContextTypes = {
    value: PropTypes.number
};

export default A;