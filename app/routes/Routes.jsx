import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from '../views/Home/Home';
import Api from '../views/Api/Api';

export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/api" component={Api}/>
                </div>
            </Router>
        );
    }
}
