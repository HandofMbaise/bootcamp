import React from 'react';
import { Link } from 
 'react-router-dom';
import pic1 from './assets/pic1.jpg'
import pic2 from './assets/pic2.jpg'
import pic3 from './assets/pic3.jpg'
import { useEffect } from 'react'
function Pharm(){
  const nav1 = 'Home';
  const nav2 = 'About us'
  const nav3 = 'Login'
  const nav4 =  'Register'
  const nav5 =  'Logout'

 
  function welcome(){
    window.alert('Welcome customer')
  }
  
  function seePharm(){
   const response = window.prompt('Good day i am Mark the pharmacist. you can talk to me here');
   if(response){
    window.alert('Ok we will get back to you soon')
   } else{
    window.alert('have a nice day')
   }
  }

  function order(){
    const response = window.prompt('Enter an item name');
    if(response){
      const output = window.prompt('Enter a Qty');
      if(output){
        window.alert('order success')
      }
    } else{
      window.alert('Have a nice day.')
    }
  }
 
  if(localStorage.getItem('token') === null){
  window.alert('Unauthorized user!! register and login again');
  window.location.href = '/'

} else{
   function checkId(){
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    document.getElementById('user-Id').textContent = user.username;
    
  }, []);

  };

  checkId() 
}

  


  function logOut(){
    window.alert('Logged out success');
    window.location.href = 'login'

  }

  
  function Timeout(){
    setTimeout(() => {
    window.alert('Session timeout you will be redirected soon');
    localStorage.removeItem('user')
    }, 20000);

      setTimeout(() => {
    localStorage.removeItem('token');
  }, 30000)
  }

  Timeout();
  
  
    return(
      <>

 <div id="head">
   <h1 id="logo">PHARMACY</h1>
   <div id="user-div">
   <h4>User:</h4><h4 id="user-Id"></h4>
   </div>

   <nav className="nav-bar">
    <ul>
        <li><Link to="/home">{nav1}</Link></li>
        <li><Link to="/about">{nav2}</Link></li>
        <li><Link to="/login">{nav3}</Link></li>
        <li><Link to="/">{nav4}</Link></li>
        <li><Link to="" onClick={ logOut}>{nav5}</Link></li>
    </ul>
   </nav>
   
 </div>

<section id="body-section">

<div className="body-div">
<img src={pic2} className="images"></img>
 <button className="button" onClick={welcome}>Welcome click</button>
</div>

<div className="body-div">
<img src={pic1} className="images"></img>
 <button className="button" onClick={seePharm}>Talk to a Pharmacist</button>
</div>

<div className="body-div">
<img src={pic3} className="images"></img>
 <button className="button" onClick={order}>Make an order</button>
</div>

</section>
 
</>

    )
}









// function Body(){

//   return(
//   <>
  
  
  
//   </>

//   )
// }



// function LogIn(props){
//  if(props.username === 'Mark'){
//     return <h2 className="UserMsg">Welcome {props.username}</h2>
//  } else{
//     return <h2 className="UserMsg">invalid username {props.username}</h2>
//  }

// }

// import React, {useState} from 'react';

// function Input(){

//    const[user, setUser] = useState('');

//    const changeUser = () => {
//      setUser(event.target.value)
//    }

//    return(
//       <>
//        <h2 className="UserMsg"> {user}</h2>
//       <input type="text" value={user} onChange={changeUser}/>
//       </>
//    )
// }





export default Pharm;