import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterForm(){
    const [username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    async function registerForm(e){
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify({ username, password }));
        try{
          
          if(!username || !password){
             window.alert('Username and password required')

          } else if(username.includes(1) || username.includes(2) 
            || username.includes(3) || username.includes(4) || username.includes(5) 
            || username.includes(6) || username.includes(7) 
            || username.includes(8) || username.includes(9)
            || username.includes(0)){
            window.alert('username must be a string');

          } else{
            window.location.href = '/login'
            window.alert(` User ${username} created`)
          }
        } catch(error){
            console.error(error)
        }
    }
          
          


    return(

        <>

        <div>

         <h1 id="logo">Register Page</h1>

         <nav className="nav-bar">
            <ul>

            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>

            </ul>

         </nav>

        </div>



    <div id="register-div">

   <form onSubmit={registerForm} id="register-Form">
   <label>
    Username:
    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input"/>
   </label>
    <br/>

    <label>
    Password:
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input"/>
    </label>

    <br/>

    <button type="submit" id="submit-button">Register</button>

   </form>

    </div>

    </>
    )


}


export default RegisterForm;