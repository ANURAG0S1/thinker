import React from 'react'
import './../css/dashboard.css'
import video from './../dashboard.mp4'

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

            <section style={{ height: "calc(100vh - 300px)", alignItems: "center", display: "flex", fontFamily: "poppins", flexDirection: "column", justifyContent: "center", textAlign: "center", marginTop: "50px", paddingBottom: "20%" }}>
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
                <div style={{ width: "60vw", position: 'absolute', bottom: '0', }}>

                    <video className='main-vid' style={{
                        width: "100%", bottom: "-40px",
                        transform: " scale(1) translateY(30%)"
                    }} loop autoplay="true" muted src={video} type="video/mp4">  </video>

                </div>
            </section>
            <section style={{ height: "calc(100vh - 300px)", alignItems: "center" }}>

            </section>
        </>
    )
}

export default Dashboard
