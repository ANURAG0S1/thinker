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

            <section style={{ alignItems: "center", display: "flex", fontFamily: "poppins", justifyContent: "center", textAlign: "center", marginTop: "50px" }}>
                <div>
                    <h1 style={{
                        fontSize: "32px",
                        lineHeight: "30px",
                        fontWeight: "500"
                    }}>
                        We will help your idea and stories to reach thousand others like you
                    </h1>
                    <br />
                    <h3 style={{ fontWeight: "400", textAlign: "center", width: "100%" }}>
                        expand your imagination and let us know what you can think of
                    </h3>
                    <button className="button" style={{ marginTop: "30px", fontWeight: "bolder" }}>Join Us</button>
                </div>
            </section>
        </>
    )
}

export default Dashboard
