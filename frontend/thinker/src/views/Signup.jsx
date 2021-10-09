import React from 'react'

function Signup() {
    return (
        <div style={{
            maxWidth: "400px",
            margin: "auto",
            marginTop: "60px",
            positionL: "absolute",
            padding: "20px",
            border: "1px solid blue",
            borderRadius: "21px",
            background: "white",

        }}>
            <h1 style={{
                width: "100%",
                textAlign: "center",
                marginBottom: "12px",
                color: "blue"
            }}>
                Signup
            </h1>
            <div style={{
                padding: "20px",
                border: "1px solid blue",
                borderRadius: "21px",
                color: "blue",
                background: "white",

            }}>

                <label style={{
                    color: "blue",
                    display: "block",


                }} htmlFor="username">Username <br />
                    <input style={{
                        width: "100%",
                        color: "blue",
                        padding: "5px 10px",
                        borderRadius: "12px",
                        border: "1px solid blue"
                    }} type="text" />
                </label>
                <div></div>

                <label
                    style={{
                        color: "blue",
                        display: "block",
                        marginTop: "15px",
                        paddingTop: "15px"
                    }} htmlFor="password">Password <br />
                    <input
                        style={{
                            width: "100%",
                            color: "blue",
                            padding: "5px 10px",
                            borderRadius: "12px",
                            border: "1px solid blue"
                        }}
                        type="text" />
                </label>
                <button style={{
                    width: "100%",
                    color: "white", marginTop: "15px",
                    padding: "5px 10px",
                    background: "blue",
                    fontweight: "bold",
                    borderRadius: "12px",
                    border: "1px solid blue"
                }}>
                    Sign  up
                </button>
            </div >

            <p style={{ color: "blue", width: "100%", textAlign: "center", paddingTop: "12px", textDecoration: "underline" }}>
                back to Home
            </p>
        </div>
    )
}

export default Signup
