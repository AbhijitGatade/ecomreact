import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../../login.css'

export default function SignInPage() {

    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");

    const headers= {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }

    const login = async(event) =>{
        event.preventDefault();
        const data={
            username:username,
            password:password
        }
        //console.log("Form data:",data);
        const regData =await axios.post('http://localhost:5000/api/auth/login', data, headers);
        if(regData.data === "Wrong User Name")
        {
            alert("wrong Username");
        }
        else if(regData.data === "Wrong Password")
        {
            alert("Wrong password");
        }
        else{
            alert("Login success");
        }
    }

    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>            
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" value={username} onChange={(event)=>{setUserName(event.target.value)}} required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" value={password} onChange={(event)=>{setPassword(event.target.value)}} required />
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={login}>Login</button>
                </p>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
