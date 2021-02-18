import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBBtn } from "mdbreact";

const Home = () => {
    return (<div className="App">
    <h1>Code Port</h1>
    {/* <MDBBtn color="primary">Primary</MDBBtn> */}
    {/* Link to List.js */}
    <Link to={'./test'}>
      <button variant="raised">
        Start your journey!
    </button>
    
    </Link>
    {/* <MDBBtn gradient="purple">Test</MDBBtn> */}
    <Link to={'./test'}>
      <button variant="raised">
        Basic Pagination
    </button>
    </Link>
  </div>)
}

// class Home extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Code Port</h1>
//         <MDBBtn color="primary">Primary</MDBBtn>
//         {/* Link to List.js */}
//         <Link to={'./test'}>
//           <button variant="raised">
//             Start your journey!
//         </button>
        
//         </Link>
//         {/* <MDBBtn gradient="purple">Test</MDBBtn> */}
//         <Link to={'./test'}>
//           <button variant="raised">
//             Basic Pagination
//         </button>
//         </Link>
//       </div>
//     );
//   }
// }
export default Home;
