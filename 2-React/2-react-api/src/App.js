import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Greeting from './components/Greeting'
import Box from './components/Box';
import Employee from './components/Employee';
import Product from './components/Product';
import A from './components/A';
import CounterBox from './components/CounterBox';

class App extends Component {
  constructor(props) {
    super();
    console.log('App::constructor()');
    //console.log(props);
    this.state = {
      message: "good evening"
    }
    //this.changeMessage=this.changeMessage.bind(this)
  }
  changeMessage(e, message) {
    //console.log(e);
    //console.log(this)
    this.setState({ message }) // mutating state
  }
  render() {
    console.log('App::render()')
    //this.props.title = "im changing title property" // error , becoz props are immutable by default
    //let title = this.props.title;
    //or
    let { title, tnr } = this.props
    let { message } = this.state;
    return (
      <div className="container">
        <hr />
        <h1>{title} - <span className="badge badge-dark">{tnr}</span></h1>
        <hr />
        
        <CounterBox />

        <hr />
        <A value={1000} />
        <br />
        <A value={2000} />
        <hr />

        <Box>
          <Employee />
          <Employee />
          <Employee />
        </Box>
        <Box>
          <Product />
          <Product />
          <Product />
        </Box>
        <hr />


        <button onClick={e => this.changeMessage(e, 'good morining')} className="btn btn-info"> GM </button>&nbsp;
        <button onClick={e => this.changeMessage(e, 'good noon')} className="btn btn-info"> GN </button>&nbsp;
        <button onClick={e => this.changeMessage(e, 'good eveining')} className="btn btn-info"> GE </button>&nbsp;
        <button onClick={e => this.changeMessage(e, '')} className="btn btn-danger"> Remove Greeting </button>&nbsp;
        <hr />

        {message ? <Greeting message={message} /> : null}


      </div>
    );
  }

  componentDidMount() {
    console.log('App::componentDidMount()');
    // n/w call  & redux subscription
    // setTimeout(() => {
    //   let serverMessage = "hello from server-side";
    //   this.setState({ message: serverMessage });
    // }, 3000)
  }

  componentDidUpdate() {
    console.log('App::componentDidUpdate()');
  }
}



App.propTypes = {
  title: PropTypes.string,
  tnr: PropTypes.string
}
App.defaultProps = {
  title: 'react-learn',
  tnr: 'Anonymous'
}

export default App;
