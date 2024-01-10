import axios from "axios"
import { useState } from "react"
import React from 'react'

const Login = () => {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault();

        console.log(email, password)

        const response = await axios.post('http://localhost:5000/login', 
        JSON.stringify({email, password}),
        {
            headers: { 'Content-Type': 'application/json'}
        }
    );


    }

  return (
    <div className='App'>
        <header className='App-header'>
            <div className='login-form-wrap'>
                <h2>Login</h2>
                <form className='login-form'>
                    <input type="email" name='email' placeholder='Email' required 
                    onChange={(e) => setEmail(e.target.value) } />

                    <input type="password" name="password" placeholder='password' required
                    onChange={(e) => setPassword(e.target.value)} />

                    <button type='submit' className='btn-login' onClick={handleLogin}>Login</button>
                </form>
            </div>
        </header>
    </div>
  )
}

export default Login