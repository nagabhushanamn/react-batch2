

import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Greeting extends Component {
    constructor(props) {
        super(props);
        console.log('Greeting::constructor()');
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.forceUpdate();
        }, 300)
    }
    render() {
        console.log('Greeting::render()');
        let { message } = this.props;
        let time = new Date().toTimeString();
        return (
            <div className="alert alert-info">
                <p>{message}</p>
                <hr />
                <p>{time}</p>
            </div>
        );
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Greeting::shouldComponentUpdate()');
        return this.props.message !== nextProps.message;
    }
    componentWillUnmount() {
        console.log('Greeting::componentWillUnmount()');
        //
        clearInterval(this.interval);
    }
}

Greeting.propTypes = {
    message: PropTypes.string
}
Greeting.defaultProps = {
    message: 'welcome'
}


export default Greeting;