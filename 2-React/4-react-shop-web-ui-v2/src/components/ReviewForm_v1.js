import React, { Component } from 'react';

class ReviewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
    toggleForm() {
        let { isOpen } = this.state;
        this.setState({ isOpen: !isOpen })
    }
    handleSubmit(e) {
        e.preventDefault();
        let newReview = {
            stars: this.refs.stars.value,
            author: this.refs.author.value,
            body: this.refs.body.value,
        }
        let { onNewReview } = this.props;
        if (onNewReview) {
            onNewReview(newReview);
            this.toggleForm();
        }
    }
    renderForm() {
        let { isOpen } = this.state;
        if (!isOpen) {
            return (<button onClick={e => this.toggleForm()} className="btn btn-sm btn-dark"><i className="fa fa-plus"></i></button>)
        } else {
            return (
                <div className="row">
                    <div className="col-sm-12 col-md-8">
                        <div className="card card-default">
                            <div className="card-header">Review Form</div>
                            <div className="card-body">
                                <form onSubmit={e => this.handleSubmit(e)}>
                                    <div className="form-group">
                                        <label>stars</label>
                                        <select className="form-control" ref="stars">
                                            {[1, 2, 3, 4, 5].map((n, idx) => <option key={idx}>{n}</option>)}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>author</label>
                                        <input className="form-control" ref="author" />
                                    </div>
                                    <div className="form-group">
                                        <label>body</label>
                                        <textarea className="form-control" ref="body"></textarea>
                                    </div>
                                    <button className="btn btn-sm btn-dark">submit</button>&nbsp;
                                    <button type="button" onClick={e => this.toggleForm()} className="btn btn-sm btn-danger">cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderForm()}
            </div>
        );
    }
}

export default ReviewForm;