import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import TopicForm from './pages/NewTopicForm';
import Test from './pages/Test'
import Topic from './pages/Components/Topic';
import Pagination from './pages/Pagination';
import Layout from './pages/Layouts/Layout'

class App extends Component {
    render() {
        const App = () => (
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/form' component={TopicForm} />
                    <Route path='/test' component={Test} />
                    <Route exact path='/topic' component={Pagination} />
                    <Route path='/topic/:topicID' component={withRouter(Topic)} />
                </Switch>
            </div>
        )
        return (
            <Layout>
                <Switch>
                    <App />
                </Switch>
            </Layout>
        );
    }
}

export default App;