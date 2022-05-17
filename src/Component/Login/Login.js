import React, { useContext, useState } from 'react';
import * as firebase from 'firebase/app';

import { UserContext } from '../../App';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework } from './loginManager';
import { signOut } from 'firebase/auth';



function Login() {
  const [newUser,setNewUser]=useState(false);
  const [user,setUser] = useState({
    isSignedIn: false,
    name: '',
    email:'',
    password:'',
    photo:''

  })

  initializeLoginFramework();
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

 const googleSignIn =() =>{

  handleGoogleSignIn()
  .then(res =>{
    setUser(res)
    setLoggedInUser(res);
  })
 }

 const fbSignIn = ()=>{
   handleFbSignIn()
   .then(res =>{
    setUser(res)
    setLoggedInUser(res);
   })
 }





 const signOut = () =>{
   handleSignOut()
   .then(res =>{
     setUser(res);
     setLoggedInUser(res);
   })
 }





  const handleBlur =(e) =>{
    let isFieldValid = true;

    if(e.target.name ==='email'){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      
    }
    if(e.target.name ==='password'){

      isFieldValid = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(e.target.value);
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }

  const handleSubmit =(e)=>{
    
    if(newUser && user.email && user.password){

    }

    if(!newUser && user.email && user.password){

    }
    e.preventDefault();
  }



  return (
   <div>
     {
       user.isSignedIn ?<button onClick={signOut} >SignOut</button> :
       <button onClick={googleSignIn} >SignIn</button>

    }

    <br />
    <button onClick={fbSignIn}>Sign In With Facebook</button>

     {
       user.isSignedIn && <div>
         <p>Welcome,{user.name}</p>
         <p>Your email:{user.email}</p>
         <img src={user.photo} alt="" srcset="" />
      </div>
     }

     <div>
       {/* <h1>Our own Authentication</h1>
       <p>Name:{user.name}</p>
       <p>Email:{user.email}</p>
       <p>Password:{user.password}</p> */}
       <input type="checkbox" onChange={()=>setNewUser(!newUser)} name="" id="" />
       <form onSubmit={handleSubmit}>
        {newUser && <input type="text" name="name" id="" onBlur={handleBlur} placeholder='input your name' required />}
         <br />
         <input type="text" name="email" id="" onBlur={handleBlur} placeholder='input your email address' required/>
         <br />
         <input type="password" name="password" onChange={handleBlur} id="" placeholder='a-zA-Z0-9!@#$%^&* ' required />
         <br />
         <input type="submit" value={newUser ? 'Sign In' :'Sign Up  '} />
       </form>

       <p style={{ color:'red' }}>{user.error}</p>
       {user.success && <p style={{ color:'green' }}>User {newUser ? "Created" : "Logged In"} Successfully</p>}
     </div>
   </div>
  );
}

export default Login;
