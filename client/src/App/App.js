import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import List from './pages/List';
import Test from './pages/Test'
import Topic from './pages/Components/Topic';
import Pagination from './pages/Pagination';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
          <Route path='/test' component={Test}/>
          <Route exact path='/topic' component={Pagination}/>
          <Route path='/topic/:topicID' component={Topic}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;