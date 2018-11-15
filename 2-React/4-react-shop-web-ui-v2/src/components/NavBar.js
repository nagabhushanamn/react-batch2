

// way-1
//-----------------------------------------------------------------

// import React, { Component } from 'react';

// class NavBar extends Component {
//     render() {
//         let { title } = this.props
//         return (
//             <div>
//                 <nav className="navbar navbar-light bg-primary">
//                     <a className="navbar-brand" href="/#">{title}</a>
//                 </nav>
//             </div>
//         );
//     }
// }

// export default NavBar;


// // way-2
// //-----------------------------------------------------------------

// import React from 'react';

// export default function ({ title }) {
//     return (
//         <div>
//             <nav className="navbar navbar-light bg-primary">
//                 <a className="navbar-brand" href="/#">{title}</a>
//             </nav>
//         </div>
//     );
// }


// way-3
//-----------------------------------------------------------------

import React from 'react';

export default ({ title }) => {
    return (
        <div>
            <nav className="navbar navbar-light bg-primary">
                <a className="navbar-brand" href="/#">{title}</a>
            </nav>
        </div>
    );
}