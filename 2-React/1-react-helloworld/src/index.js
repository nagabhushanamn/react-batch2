

import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import ReactDOM from 'react-dom';

// Greeting UI
/*
    <div class="alert alert-info">
        <p>Good Morining</p>
        <p>10.45 AM </p>
    </div>
*/

//------------------------------------------------
// step-1:  define component class

// class Greeting extends React.Component {
//     render() {
//         let pEle1 = React.createElement('p', { key: 1 }, 'Good Morining');
//         let pEle2 = React.createElement('p', { key: 2 }, '10.45 AM');
//         let divEle = React.createElement('div', { className: 'alert alert-info' }, [pEle1, pEle2]);
//         return divEle;
//     }
// }

// or  JSX 


class Greeting extends React.Component {
    render() {
        return (
            <div className="alert alert-info">
                <p>{this.props.message}</p>
                <p>10.45 PM</p>
            </div>
        );
    }
}



//------------------------------------------------
// step-2:  create instance of component class

// let greeting1 = React.createElement(Greeting, null, null)

// or

let gnGreeting = <Greeting message="good night" />
let gmGreeting = <Greeting message="good morning" />

//------------------------------------------------

ReactDOM.render(gnGreeting, document.getElementById('root'))



