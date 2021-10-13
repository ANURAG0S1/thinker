import React, { useState } from 'react';
import './../css/postform.css';
import axios from 'axios';

function Postform({ refreshHandler }) {
    const [show, setshow] = useState(false);
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [message, setmessage] = useState('');
    const lusername = localStorage.getItem("username")
    const lpassword = localStorage.getItem("password")


    const openmodal = () => {

        setshow(true)
        console.log(" modal opened")
    }
    const closemodal = () => {
        setshow(false)
        console.log('closingmodal')
    }
    const senddata = async () => {


        console.log("datA GIVEN  tp server")
        const res = await axios.post("http://localhost:5000/post/newpost", { username: username, message: message, password: password })
            ;
        console.log("data by server ", res);
        setshow(false)

        console.log(username, message, password)
        refreshHandler()

    }

    const handlemessage = e => {
        setmessage(e.target.value)

        setusername(lusername)
        setpassword(lpassword)
    }
    let angle = show ? "rotate(45deg)" : "";
    return (
        <div style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            backgroundColor: "blueviolet",
            height: "50px",
            width: "50px",
            borderRadius: "25px",
            background: "white",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",


        }}

        >
            <p className="postform-btn" onClick={show ? () => closemodal() : () => openmodal()} style={{
                color: "black", fontSize: "44px",
                fontWeight: "bold", transform: angle,
                userSelect: "none"
            }}>
                +
            </p>

            <p className="postform-hover">

                post a thought !!
            </p>
            {show ? <div className="postform-modal" style={{ backgroundColor: "black", borderRadius: "15px" }}>

                <label htmlFor="name">message <br />
                    <textarea type="message" value={message} onChange={handlemessage} placeholder="type your idea snap here" style={{ color: "blue", height: "100px", width: "166px" }} /></label>
                <button style={{
                    color: "blue", width
                        : "100%"
                }} onClick={senddata}>send</button>
            </div> : ""
            }
        </div >
    )
}

export default Postform;
