import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>Project Home</h1>
        {/* Link to List.js */}
        <Link to={'./test'}>
          <button variant="raised">
            TestData
        </button>
        </Link>
        <Link to={'./test'}>
          <button variant="raised">
            Basic Pagination
        </button>
        </Link>
      </div>
    );
  }
}
export default Home;
