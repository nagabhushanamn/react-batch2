
import React, { Component } from 'react';

class TopicList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topics: [
                'React',
                'Redux',
                'JavaScript'
            ]
        };
    }
    render() {
        let { topics } = this.state;
        let { onTopicSelect } = this.props;
        let topicElements = topics.map((topic, idx) => <div onClick={() => { onTopicSelect(topic) }} key={idx} className="list-group-item">{topic}</div>);
        return (
            <div className="panel panel-default">
                <div className="panel-heading">All Topics</div>
                <h1></h1>
                <div className="panel-body">
                    <div className="list-group col-md-6 col-sm-6">
                        {topicElements}
                    </div>
                </div>
            </div>

        );
    }
}

export default TopicList;