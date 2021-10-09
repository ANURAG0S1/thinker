import React from 'react'
import './../css/dashboard.css'
import video from './../assets/vid/dashboard.mp4'
import fimg from './../assets/img/idea-1.jpeg'

function Dashboard() {
    return (
        <>



            <section style={{ height: "calc(100vh - 100px)", alignItems: "center", display: "flex", fontFamily: "poppins", flexDirection: "column", justifyContent: "center", textAlign: "center", marginTop: "8%", paddingBottom: "20%" }}>
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


            <section style={{ padding: "20px 40px" }}>
                <h1 className="center s40 mt40 w100 simple-heading ">
                    What we do ?
                </h1>
                <div className="w100 mt40 h80">
                    <div className="dfr ">
                        <div>
                            <img className="r20 p40" src={fimg} alt="idea" />
                        </div>
                        <div style={{ paddingLeft: "100px", paddingTop: "20px" }}>
                            <h3>
                                We help in bulding ideal products based on your reviews and opinions
                            </h3>
                            <br />
                            <p>
                                We share you valuable opinions  to our collaborative autorities which do compile and interpret your data to calculate and guide their upcoming products. Don't worry about your data. We share your data anonymously as so to protect your privacy and personal data. we also ask you to not to share your personal data in your opinions and ideas.
                                <br />
                                <br />
                                your opinions guide the upcoming products and services to better themselves to give you a better experience. so in other terms you are making your life better by sharing your views.

                            </p>
                        </div>
                    </div>
                </div>
                <div className="w100 mt40 h80">
                    <div className="dfr mt40">

                        <div style={{ paddingTop: "20px" }}>
                            <h3>
                                We help in bulding ideal products based on your reviews and opinions
                            </h3>
                            <br />
                            <p>
                                We share you valuable opinions  to our collaborative autorities which do compile and interpret your data to calculate and guide their upcoming products. Don't worry about your data. We share your data anonymously as so to protect your privacy and personal data. we also ask you to not to share your personal data in your opinions and ideas.
                                <br />
                                <br />
                                your opinions guide the upcoming products and services to better themselves to give you a better experience. so in other terms you are making your life better by sharing your views.

                            </p>
                        </div>
                        <div style={{ paddingLeft: "100px" }}>
                            <img className="r20 p40" src={fimg} alt="idea" />
                        </div>
                    </div>
                </div>
            </section>
            <section>

            </section>


        </>
    )
}

export default Dashboard;
