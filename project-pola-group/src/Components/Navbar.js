import React from 'react'
import { Link } from 'react-router-dom';



function Navbar () {
  

  return (
    <div className="navbar">
    <img src="images/logo-polagroup.jpg" className="img-navbar" alt="" />

    <button className="nav-button">
    <Link to="/register" className="table-button-text" >Sign Up</Link>
    </button>
  </div>
 
    )
   
}

  export default  Navbar; 