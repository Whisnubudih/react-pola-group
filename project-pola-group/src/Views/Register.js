import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom';

function Register () {
  const navigate = useNavigate()
  const [registerForm, setRegisterForm] = useState({
        email: '',
        password: '',
        name: '',

        
  })

  const registerFormInput = (e) => {
    const value = e.target.value
    const field = e.target.name
    setRegisterForm({
      ...registerForm,
      [field]: value
    })
  }

  const registerHandlers = () =>{
    fetch(`http://localhost:10000/register`, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
       
        },
        body: JSON.stringify(registerForm),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        navigate('/login')
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
        <h2> Register</h2>
      </div>
      <form className="form-add" onSubmit={(e) =>{
        e.preventDefault()
        console.log(registerForm)
        registerHandlers()
       }} >
          <div className="input-add">
          <label className="label-name" >Name</label>
            <input className="input-name" name='name' value={registerForm.name} onChange={registerFormInput}  type="text" placeholder="Type Here"></input>

          <label className="label-name" >Email</label>
          <input className="input-name" name='email' value={registerForm.email} onChange={registerFormInput} type="text" placeholder="Type Here"></input>

            <label className="label-name" >Password</label>
            <input className="input-name" name='password' value={registerForm.password} onChange={registerFormInput}  type="password" placeholder="Type Here"></input>
          </div>
          <div className="form-button">

              <button className="table-button1" type="submit"> <p className="table-button-text">
                Save
              </p> </button>

              
              <button className="table-button2" > <Link to="/login" className="table-button-text">
                Cancel
              </Link> </button>
            </div>
      </form>
    </div>
  </div>
</section>
    )
   
}

  export default  Register; 