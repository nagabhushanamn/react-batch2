import React, { Component } from 'react';

class ReviewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            stars: 5,
            author: 'nag@gmail.com',
            body: ''
        }
    }
    toggleForm() {
        let { isOpen } = this.state;
        this.setState({ isOpen: !isOpen })
    }
    handleSubmit(e) {
        e.preventDefault();
        let { stars, author, body } = this.state;
        let newReview = {stars,author,body}
        let { onNewReview } = this.props;
        if (onNewReview) {
            onNewReview(newReview);
            this.toggleForm();
        }
    }
    handleChange(e) {
        let fieldId = e.target.id
        let fieldValue = e.target.value
        this.setState({ [fieldId]: fieldValue })
    }
    disableFormSubmit() {
        let { stars } = this.state;
        if (stars < 3) return true
        else return false;
    }
    renderForm() {
        let { isOpen, stars, author, body } = this.state;
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
                                        <select className="form-control" id="stars" value={stars} onChange={e => this.handleChange(e)}>
                                            {[1, 2, 3, 4, 5].map((n, idx) => <option key={idx}>{n}</option>)}
                                        </select>
                                        {stars < 3 ? 'give atleast 3 stars' : ''}
                                    </div>
                                    <div className="form-group">
                                        <label>author</label>
                                        <input className="form-control" id="author" value={author} onChange={e => this.handleChange(e)} />
                                    </div>
                                    <div className="form-group">
                                        <label>body</label>
                                        <textarea className="form-control" id="body" value={body} onChange={e => this.handleChange(e)}></textarea>
                                    </div>
                                    <button disabled={this.disableFormSubmit()} className="btn btn-sm btn-dark">submit</button>&nbsp;
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