import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Field from './Field'

function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    return (
        <form className="login">
            <div className="header login-header">Medicon Pharmacy</div>
            <div className="fields">
                <div className="field">
                    <b>User Name:</b> <br />
                    <input type= "text" className="textBox" required/>
                </div>
                <div className="field">
                    <b>Password:</b>  <br />
                    <input type= "password" className="textBox" required/>   
                </div>
                
            </div>
        <Link to="/home" className="btn btn-primary">Login</Link>
        </form>
    )
}

export default Login
