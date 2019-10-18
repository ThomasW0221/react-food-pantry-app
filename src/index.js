import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router} from 'react-router-dom'
import App from './components/App'
import Inventory from './components/Inventory'

const routing = (
    <Router>
        <Route exact path="/" component={Inventory} />
        <Route path="/inventory" component={Inventory} />
    </Router>
)

ReactDOM.render(routing, document.querySelector("#root"))