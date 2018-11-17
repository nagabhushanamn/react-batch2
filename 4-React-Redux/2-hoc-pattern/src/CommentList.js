import React, { Component } from 'react';

import store from './store'
import { connect } from './hoc'

class CommentList extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         comments: store.getState().comments
    //     }
    // }

    // componentDidMount() {
    //     //..
    //     store.subscribe(() => { })
    // }
    // componentWillUnmount() {
    //     //..
    //     store.unsubscribe();
    // }
    // handleLogic() {
    //     //
    // }


    render() {
        let { data: comments } = this.props
        return (
            <div>
                {
                    comments.map((comment, idx) => {
                        return (<div key={idx} className="list-group-item">{comment}</div>)
                    })
                }
            </div>
        );
    }
}

// export default CommentList;
export default connect(CommentList, state => state.comments)