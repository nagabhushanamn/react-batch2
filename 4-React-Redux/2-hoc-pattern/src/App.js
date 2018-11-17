import React, { Component } from 'react';
import './App.css';
import TopicList from './TopicList';
import CommentList from './CommentList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <hr />
        <h1> React : Higher Order Components </h1>
        <hr />
        <div className="row">
          <div className="col-6 com-sm-6 col-md-6">
            <TopicList />
          </div>
          <div className="col-6 com-sm-6 col-md-6">
            <CommentList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
