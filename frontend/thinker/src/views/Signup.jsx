import { useState } from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";


function Register() {
    let history = useHistory();
    const [color, setcolor] = useState('white')
    const [data, setdata] = useState({})
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const senddata = async () => {
        localStorage.setItem("username", username)


        localStorage.setItem("password", password)
        const res = await axios.post("http://localhost:5000/user", { username: username, password: password })
            ;

        setdata(res.data)
        if (res.data.status) {
            setcolor("green")
        } else {
            setcolor("red")
        }
        console.log(res.data, username, password)
    }

    const handleusername = e => {
        let val = e.target.value
        setusername(val)

    }
    const handlepassword = e => {
        let val = e.target.value
        setpassword(val)
    }
    const goToPreviousPath = () => {
        history.goBack()
    }
    return (
        <>
            <div className="popup" style={{
                padding: "5px 10px", color: color, width: "fit-content", margin: "auto", borderColor: color || "blue",
                borderWidth: "1px", borderStyle: "solid", borderRadius: "12px", height: "36px"
            }}>
                {data ? data.message : "status"}
            </div>
            <div style={{
                maxWidth: "400px",
                margin: "auto",
                marginTop: "10px",
                positionL: "absolute",
                padding: "20px",
                border: "1px solid black",
                borderRadius: "21px",
                background: "white",

            }}>
                <h1 style={{
                    width: "100%",
                    textAlign: "center",
                    marginBottom: "12px",
                    color: "black"
                }}>
                    Signup
                </h1>
                <div style={{
                    padding: "20px",
                    border: "1px solid black",
                    borderRadius: "21px",
                    color: "black",
                    background: "white",

                }}>

                    <label style={{
                        color: "black",
                        display: "block",


                    }} htmlFor="username">Username <br />
                        <input
                            value={username}
                            onChange={handleusername}
                            style={{
                                width: "100%",
                                color: "black",
                                padding: "5px 10px",
                                borderRadius: "12px",
                                border: "1px solid black"
                            }} type="text" />
                    </label>
                    <div></div>

                    <label
                        style={{
                            color: "black",
                            display: "block",
                            marginTop: "15px",
                            paddingTop: "15px"
                        }} htmlFor="password">Password <br />
                        <input
                            value={password}
                            type="password"
                            onChange={handlepassword}
                            style={{
                                WebkitTextSecurity: 'disc',
                                width: "100%",
                                color: "blue",
                                padding: "5px 10px",
                                borderRadius: "12px",
                                border: "1px solid black"
                            }}
                        />
                    </label>
                    <button
                        onClick={senddata}
                        style={{
                            width: "100%",
                            color: "white", marginTop: "15px",
                            padding: "5px 10px",
                            background: "black",
                            fontweight: "bold",
                            borderRadius: "12px",
                            border: "1px solid black"
                        }}>
                        Sign  up
                    </button>
                </div >

                <p onClick={goToPreviousPath} style={{ color: "black", width: "100%", textAlign: "center", paddingTop: "12px", textDecoration: "underline" }}>
                    back to Home
                </p>


            </div>


        </>
    )
}

export default Register
