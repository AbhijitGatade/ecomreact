import axios from 'axios'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import '../../register.css'

export default function SignUpPage() {

    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");

    const history = useHistory();

    const headers= {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
    const register = async(event) =>{
        event.preventDefault();
        const data={
            username:username,
            email:email,
            password:password
        }
        console.log("Form data:",data);
        const regData =await axios.post(`http://localhost:5000/api/auth/register`,data,headers);
        if(regData.data){
            console.log(regData);
            //history.push('/login')
        }else{
            alert("user not registered.. Try Again")
        }
    }
    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" value={username} onChange={(event)=>{setUserName(event.target.value)}} required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" value={email} onChange={(event)=>{setEmail(event.target.value)}} required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" value={password} onChange={(event)=>{setPassword(event.target.value)}} required />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={register}>Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
