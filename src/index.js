import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router} from 'react-router-dom'
import Inventory from './components/Inventory'
import Donation from './components/Donation'
import InventoryForm from './components/InventoryForm'
import NavBar from './components/NavBar'
import DonationForm from './components/DonationForm'

const routing = (
    <div>
        <NavBar />
        <Router>
            <Route exact path="/" component={Inventory} />
            <Route exact path="/inventory" component={Inventory} />
            <Route exact path="/donations" component={Donation} />
            <Route exact path="/inventoryform" component={InventoryForm}/>
            <Route exact path="/donationform" component={DonationForm}/>
        </Router>
    </div>
   
)

ReactDOM.render(routing, document.querySelector("#root"))