import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'


function Login() {
  const navigate = useNavigate()
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',

  })

  const loginFormInput = (e) => {
    const value = e.target.value
    const field = e.target.name
    setLoginForm({
      ...loginForm,
      [field]: value
    })
  }

  const LoginHandlers = () => {
    fetch(`http://localhost:10000/login`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginForm),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        localStorage.setItem('access_token', data.access_token)
        navigate('/')
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <section>
      
        <Navbar />

     
      <div className="formUser">
        <div className="form">
          <div className="container-image">
            <h2> Login</h2>
          </div>
          <form className="form-add" onSubmit={(e) =>{
        e.preventDefault()
        console.log(loginForm)
        LoginHandlers()
       }} >
              <div className="input-add">
              <label className="label-name" htmlFor="">Email</label>
              <input className="input-name" name='email' value={loginForm.email} onChange={loginFormInput} type="text" placeholder="Type Here"></input>

                <label className="label-name" htmlFor="">Password</label>
                <input className="input-name" name='password' value={loginForm.password} onChange={loginFormInput} type="password" placeholder="Type Here"></input>
              </div>
              <div className="form-button">

                  <button className="table-button1" type="submit"> <p className="table-button-text">
                    Save
                  </p> </button>
                </div>
          </form>
        </div>
      </div>
    </section>
  )

}

export default Login; 