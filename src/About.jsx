import React from 'react';
import { Link } from 
 'react-router-dom';

function About(){
    const nav1 = 'Home';
    const nav2 = 'About us';
    const nav3 = 'Login'
    const nav4 = 'Register'


    return(
        <>

        <div>

<h1 id="logo">Welcome To About Page</h1>

<nav className="nav-bar">
    <ul>
        <li><Link to="/home">{nav1}</Link></li>
        <li><Link to="/about">{nav2}</Link></li>
        <li><Link to="/login">{nav3}</Link></li>
        <li><Link to="/">{nav4}</Link></li>
    </ul>
   </nav>
   <h1 id="sample-text"> This is just a sample site to demonstrate strong capabilities in react. </h1>
   </div>

       </>

    )
}


export default About;