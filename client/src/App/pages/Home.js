import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import M from 'materialize-css'

const Home = () => {
  return (<div className="App container">
    <div className="card-panel indigo darken-1 z-depth-5 ">

      <h1 className="text-white">Code Port</h1>
    </div>

    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1 z-depth-3">
          <div className="card-content white-text">
            <span className="card-title">First Steps!</span>
            <p>Click the link below to start your Java Journey</p>
          </div>
          <div className="card-action">
            <a href="#">Start your voyage</a>
          </div>
        </div>
      </div>
    </div>

  </div>)
}

export default Home;
