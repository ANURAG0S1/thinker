import React from 'react'
import './../css/dashboard.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Dashboard from './Dashboard';
import Homefeed from './Homefeed'
import How from './How';


function Routern() {
    return (
        <>
            <Router>
                <div className="nav dfr">

                    <div className="font-heading s40">
                        Thinker
                    </div>
                    <div className="menu w40">
                        <div className="Home">
                            <Link to="/feed">
                                home</Link>
                        </div>
                        <div className="about">
                            <Link to="/about">
                                about
                            </Link>
                        </div>
                        <div id="how">
                            <Link to="/how">
                                How it works
                            </Link>
                        </div>

                    </div>


                </div>


                <Switch>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>

                    <Route path="/home">
                        <Homefeed />
                    </Route>

                    <Route path="/about">
                        <Homefeed />
                    </Route>
                    <Route path="/how">
                        <How />
                    </Route>
                </Switch>

            </Router><div>
                <p>

                    common in asll
                </p>
            </div>
        </>
    )
}

export default Routern;
