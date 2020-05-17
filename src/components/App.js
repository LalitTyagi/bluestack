import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducers";

import LiveCampaigns from './LiveCampaigns';
import PastCampaigns from './PastCampaigns';
import UpcomingCampaigns from './UpcomingCampaigns';

import '../style/style.css';
import '../style/header.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <h1>Manage Campaigns</h1>
                    <div className="header">
                        <div className="header-right">
                            <NavLink to="/upcomingCampaigns">Upcoming Campaigns</NavLink>
                            <NavLink to="/liveCampaigns">Live Campaigns</NavLink>
                            <NavLink to="/pastCampaigns">Past Campaigns</NavLink>
                        </div>
                    </div>
                    <br />
                    <Switch>
                        <Route path="/upcomingCampaigns" component={UpcomingCampaigns} />
                        <Route path="/liveCampaigns" component={LiveCampaigns} />
                        <Route path="/pastCampaigns" exact component={PastCampaigns} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;