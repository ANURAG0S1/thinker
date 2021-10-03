import React from 'react'
import './../css/dashboard.css'

function Dashboard() {
    return (
        <>

            <div className="nav dfr">

                <div className="font-heading">
                    Thinker
                </div>
                <div className="menu w40">
                    <div className="Home">home
                    </div>
                    <div className="about">about</div>
                    <div id="how">
                        How it works
                    </div>
                    <button className="button">Sign Up / Log In</button>
                </div>


            </div>
        </>
    )
}

export default Dashboard
