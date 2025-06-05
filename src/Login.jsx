import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginForm(){
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');

  const[newusername, setNewusername] = useState('');
  const[newpassword, setNewpassword] = useState('');

  async function loginForm(e){
    e.preventDefault();
    localStorage.setItem('token', JSON.stringify({ newusername, newpassword }))
    const user = JSON.parse(localStorage.getItem('user'));
     try{
      
      if(user && user.username !== username && user.password !== password){
        window.alert('User not found');

      } else if(username == '' || password == ''){
        window.alert('Username and Password required')

      }  else if(username.includes(1) || username.includes(2) 
        || username.includes(3) || username.includes(4) || username.includes(5) 
        || username.includes(6) || username.includes(7) 
        || username.includes(8) || username.includes(9)
        || username.includes(0)){
        window.alert('username must be a string');
        
      } else{
        window.location.href = '/home'
        window.alert(`Welcome ${username}`);
        
      }
      
      
      
      
     } catch(error){
        console.error(error)
     }
  }


  return(
    <>
    <div>
        <h1 id="logo">Login Page</h1>

        <nav className="nav-bar">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/">Register</Link></li>

        </ul>
        </nav>

        
    </div>

    <div id="register-div">

<form onSubmit={loginForm} id="register-Form">
<label>
 Username:
 <input type="text" value={username} {...newusername} onChange={(e) => setUsername(e.target.value)} 
 {...(e) => setNewusername(e.target.value)} className="input"/>
</label>
 <br/>

 <label>
 Password:
 <input type="password" value={password} {...newpassword} onChange={(e) => setPassword(e.target.value)} 
 {...(e) => setNewpassword(e.target.value)} className="input"/>
 </label>

 <br/>

 <button type="submit" id="submit-button">Login</button>

</form>

 </div>
    
    
    </>

  )
}

export default LoginForm;