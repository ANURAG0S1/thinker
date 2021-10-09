import { findAllByTestId } from '@testing-library/dom';
import React, { useState } from 'react';
import './../css/postform.css';
import axios from 'axios';

function Postform() {
    const [show, setshow] = useState(false);
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [message, setmessage] = useState('');
    const openmodal = () => {
        setshow(true)
        console.log("  modal opened")
    }
    const closemodal = () => {
        setshow(false)
        console.log('closingmodal')
    }
    const senddata = async () => {
        const res = await axios.post("http://localhost:5000/post/newpost", { username: username, message: message, password: password })
            ;
        console.log("data by server ", res);
        setshow(false)
        console.log(username, message, password)
    }
    const handleusername = e => {
        setusername(e.target.value)
    }
    const handlepassword = e => {
        setpassword(e.target.value)
    }
    const handlemessage = e => {
        setmessage(e.target.value)
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
            color: "blue",
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
            {show ? <div className="postform-modal" style={{ backgroundColor: "blueviolet", }}>
                <label htmlFor="name">username <br />
                    <input type="text" value={username} onChange={handleusername} style={{ color: "blue" }} /></label>
                <label htmlFor="name">passcode <br />
                    <input type="password" value={password} onChange={
                        handlepassword
                    } style={{ color: "blue" }} /></label>
                <label htmlFor="name">message <br />
                    <textarea type="message" value={message} onChange={
                        handlemessage
                    } style={{ color: "blue", height: "100px", width: "166px" }} /></label>
                <button style={{
                    color: "blue", width
                        : "100%"
                }} onClick={() => { senddata() }}>send</button>
            </div> : ""}
        </div>
    )
}

export default Postform;
