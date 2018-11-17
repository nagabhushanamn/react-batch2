import React, { Component } from 'react';

// import store from './store'

import { connect } from './hoc';

class TopicList extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         topics: store.getState().topics
    //     }
    // }

    // componentDidMount() {
    //     //..
    //     store.subscribe(()=>{})
    // }
    // componentWillUnmount() {
    //     //..
    //     store.unsubscribe();
    // }
    // handleLogic() {
    //     //
    // }


    render() {
        let { data: topics } = this.props
        return (
            <div>
                {
                    topics.map((topic, idx) => {
                        return (<div key={idx} className="list-group-item">{topic}</div>)
                    })
                }
            </div>
        );
    }
}

// export default TopicList;
export default connect(TopicList, state => state.topics)