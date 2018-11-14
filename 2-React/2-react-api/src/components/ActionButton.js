import React, { Component } from 'react';
import './ActionButton.css';

class ActionButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    handleAction(e) {
        let { count } = this.state;
        count += 1
        this.setState({ count })
        let { value, onAction } = this.props;
        if (onAction)
            onAction(value * count); // child --> parent..  i.e event
    }
    render() {
        let { value } = this.props;
        let { count } = this.state;
        let className = `btn ${value > 0 ? 'btn-success' : 'btn-danger'}`
        return (
            <div className="action-button">
                <div className="card">
                    <div className="card-body">
                        <button onClick={e => this.handleAction(e)} className={className}>{value}</button>
                        &nbsp;&mdash;&nbsp;
                        <span className="badge badge-danger">{count}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ActionButton;