// import { useEffect } from "react";
import React ,{ useEffect } from 'react'
import {
    Link, useLocation,
    useNavigate
  } from "react-router-dom";

const Navbar = () => {
    const navigate= useNavigate();
    let location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
    }, [location]);
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname=== '/'? 'active' : '' }`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname=== '/about'? 'active' : '' }`} to="/about">About</Link>
        </li>
        </ul>

        
       {localStorage.getItem('token')!==null && 
          <button type="button" className="btn btn-warning mx-2" onClick={()=>{ localStorage.removeItem('token'); navigate('/'); }}>LogOut</button>
       } 
       {localStorage.getItem('token')===null &&
      <button type="button" className="btn btn-warning mx-2" onClick={()=>{navigate('/login')}}>LogIn</button> }
      {localStorage.getItem('token')===null &&
      <button type="button" className="btn btn-info mx-1" onClick={()=>{navigate('/signup')}}>SignUp</button> }

    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar