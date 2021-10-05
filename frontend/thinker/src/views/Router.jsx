import React from 'react'
import './../css/dashboard.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Signup from './Signup';
import Dashboard from './Dashboard';
import Homefeed from './Homefeed'


function Routerx() {
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
                            <Link to="/login">
                                about
                            </Link>
                        </div>
                        <div id="how">
                            <Link to="/signup">
                                How it works
                            </Link>
                        </div>
                        <button className="button">Sign Up / Log In</button>
                    </div>


                </div>


                <Switch>
                    <Route path="/login">
                        <Dashboard />
                    </Route>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                    <Route path="/feed">
                        <Homefeed />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Routerx;
