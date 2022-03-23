import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function NavbarHome () {
  const navigate = useNavigate()

  const logouthandler = () =>{
    localStorage.clear()
    navigate('/login')
  }
  return (
    <div className="navbar">

    <div className='navbar-title-container'>
    <img src="images/logo-polagroup.jpg" className="img-navbar" alt="" />
   
    <Link to="/" className="navbar-text" >Home</Link>
    <Link to="/formAdd" className="navbar-text" >Add Item</Link>
    </div>
    <button onClick={() => {
                  logouthandler()
                  }} className="nav-button">
    <p className="table-button-text" >Log Out</p>
    </button>
  </div>
 
    )
   
}

  export default  NavbarHome; 