import { useState } from 'react'
import './../css/dashboard.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Dashboard from './Dashboard';
import Homefeed from './Homefeed'
import Register from './Signup';



function Routerx() {
    const [isMobile, setisMobile] = useState(true);
    const hidemenu = () => {
        setisMobile(false)
    }
    let u = localStorage.getItem("username")

    console.log("us is ", u)


    return (
        <><div className="m-menu-btn" style={{
            position: "fixed",
            height: "auto",
            display: "flex",
            color: "white",
            zIndex: 10,
            backgroundColor: "black",
            borderBottomLeftRadius: "10px",
            padding: "4px 6px",
            width: "70px",
            right: "0",
            top: "0"
        }} onClick={() => {
            setisMobile(!isMobile);
        }}> {isMobile ? "close" : "menu"} </div>
            <Router>
                <div className="nav dfr"  >
                    <div className="font-heading s40">
                        Thinker
                    </div>
                    {
                        isMobile ?
                            <div className="menu w40">

                                <div className="Home">
                                    <Link to="/" onClick={hidemenu}>
                                        Home</Link>
                                </div>
                                <div className="about" >
                                    <Link to="/about" onClick={hidemenu}>
                                        About
                                    </Link>
                                </div>
                                {u ? "" : <div id="how">
                                    <Link to="/signup" onClick={hidemenu}>
                                        Signup
                                    </Link>
                                </div>}
                            </div>
                            : ""}
                </div>
                <Switch>
                    <Route path="/dashboard">

                        {u ? <Dashboard menubtn={setisMobile} /> : "please sign ip first"}
                    </Route>

                    <Route path="/" exact>
                        {u ?
                            <Homefeed /> : <Dashboard menubtn={setisMobile} />}
                    </Route>
                    <Route path="/signup">
                        <Register />
                    </Route>
                </Switch>

            </Router><div>
                <p>
                </p>
            </div>
        </>
    )
}

export default Routerx;
