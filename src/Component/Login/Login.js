// import React, { useContext, useState } from 'react';
// import * as firebase from 'firebase/app';

// import { UserContext } from '../../App';
// import { useHistory,useLocation } from 'react-router-dom';
// import { handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from './loginManager';

// // import { createUserWithEmailAndPassword } from 'firebase/auth';
// // import { signInWithEmailAndPassword } from 'firebase/auth';



// function Login() {
//   const [newUser,setNewUser]=useState(false);
//   const [user,setUser] = useState({
//     isSignedIn: false,
//     name: '',
//     email:'',
//     password:'',
//     photo:''

//   })

//   initializeLoginFramework();
//   const [loggedInUser,setLoggedInUser] = useContext(UserContext);
//   let history = useHistory();
//   let location = useLocation();
//   let { from } = location.state || { from: { pathname: "/" } };

//  const googleSignIn =() =>{

//   handleGoogleSignIn()
//   .then(res =>{
//     setUser(res)
//     setLoggedInUser(res);
//     history.replace(from);
//   })
//  }

//  const fbSignIn = ()=>{
//    handleFbSignIn()
//    .then(res =>{
//     setUser(res)
//     setLoggedInUser(res);
//     history.replace(from);
//    })
//  }





//  const signOut = () =>{
//    handleSignOut()
//    .then(res =>{
//      setUser(res);
//      setLoggedInUser(res);
//    })
//  }





//   const handleBlur =(e) =>{
//     let isFieldValid = true;

//     if(e.target.name ==='email'){
//       isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      
//     }
//     if(e.target.name ==='password'){

//       isFieldValid = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(e.target.value);
//     }
//     if(isFieldValid){
//       const newUserInfo = {...user};
//       newUserInfo[e.target.name] = e.target.value;
//       setUser(newUserInfo);
//     }
//   }

//   const handleSubmit =(e)=>{
    
//     if(newUser && user.email && user.password){
//       createUserWithEmailAndPassword(user.name,user.email,user.password)
//       .then(res =>{
//         setUser(res);
//         setLoggedInUser(res);
//         history.replace(from);
//       })
//     }

//     if(!newUser && user.email && user.password){
//       signInWithEmailAndPassword(user.email,user.password)
//       .then(res =>{
//         setUser(res);
//         setLoggedInUser(res);
//         history.replace(from);
//       })
//     }
//     e.preventDefault();
//   }



//   return (
//    <div>
//      {
//        user.isSignedIn ?<button onClick={signOut} >SignOut</button> :
//        <button onClick={googleSignIn} >SignIn</button>

//     }

//     <br />
//     <button onClick={fbSignIn}>Sign In With Facebook</button>

//      {
//        user.isSignedIn && <div>
//          <p>Welcome,{user.name}</p>
//          <p>Your email:{user.email}</p>
//          <img src={user.photo} alt="" srcset="" />
//       </div>
//      }

//      <div>
//        {/* <h1>Our own Authentication</h1>
//        <p>Name:{user.name}</p>
//        <p>Email:{user.email}</p>
//        <p>Password:{user.password}</p> */}
//        <input type="checkbox" onChange={()=>setNewUser(!newUser)} name="" id="" />
//        <form onSubmit={handleSubmit}>
//         {newUser && <input type="text" name="name" id="" onBlur={handleBlur} placeholder='input your name' required />}
//          <br />
//          <input type="text" name="email" id="" onBlur={handleBlur} placeholder='input your email address' required/>
//          <br />
//          <input type="password" name="password" onChange={handleBlur} id="" placeholder='a-zA-Z0-9!@#$%^&* ' required />
//          <br />
//          <input type="submit" value={newUser ? 'Sign In' :'Sign Up  '} />
//        </form>

//        <p style={{ color:'red' }}>{user.error}</p>
//        {user.success && <p style={{ color:'green' }}>User {newUser ? "Created" : "Logged In"} Successfully</p>}
//      </div>
//    </div>
//   );
// }

// export default Login;




// ============================================================================================================


// import React, { useState } from 'react';
// import * as firebase from 'firebase/app';
// import "firebase/auth";
// import { initializeApp } from "firebase/app";
// import { getAuth,signInWithPopup,GoogleAuthProvider,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword, updateProfile, FacebookAuthProvider  } from "firebase/auth";
// import firebaseConfig from './firebase.config';
// import { UserContext } from './../../App';
// import { useContext } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';



// function Login() {
//   const [newUser,setNewUser]=useState(false);
//   const [user,setUser] = useState({
//     isSignedIn: false,
//     name: '',
//     email:'',
//     password:'',
//     photo:''

//   });

//   const [loggedInUser,setLoggedInUser] = useContext(UserContext);
//   const history= useHistory();
//   const location = useLocation();


//   let { from } = location.state || { from: { pathname: "/" } };
//   const app = initializeApp(firebaseConfig);
//   const auth = getAuth(app);
//   const googleProvider = new GoogleAuthProvider();
//   const fbProvider = new FacebookAuthProvider();
//   const handleGoogleSignIn =()=>{
//   signInWithPopup(auth, googleProvider)
//   .then(res => {
//     const {displayName,email,photoURL}=res.user;
//     const signedInUser ={
//       isSignedIn:true,
//       name:displayName,
//       email:email,
//       photo:photoURL
//     }
//     setUser(signedInUser);
//     console.log(displayName,email,photoURL);
//   })
//   .catch(err =>{ 
//     console.log(err);
//     console.log(err.message);
//   })

//   }

//   const handleSignOut =()=>{
//     signOut(auth).then(res => {
//       const signedOutUser = {
//         isSignedIn:false,
//         name:'',
//         photo:'',
//         email:'',
//         error:'',
//         success:false

//       }
//       setUser(signedOutUser);
      
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   }

//   const handleFbSignIn =() =>{
//     const auth = getAuth(app);
//     signInWithPopup(auth, fbProvider)
//   .then((result) => {
//     // The signed-in user info.
//     const user = result.user;
    
//     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//     const credential = FacebookAuthProvider.credentialFromResult(result);
//     const accessToken = credential.accessToken;
//     console.log(user);

//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = FacebookAuthProvider.credentialFromError(error);

//     console.log(errorCode,errorMessage,email,credential);

//     // ...
//   });

//   }




//   const handleBlur =(e) =>{
//     let isFieldValid = true;

//     if(e.target.name ==='email'){
//       isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      
//     }
//     if(e.target.name ==='password'){

//       isFieldValid = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(e.target.value);
//     }
//     if(isFieldValid){
//       const newUserInfo = {...user};
//       newUserInfo[e.target.name] = e.target.value;
//       setUser(newUserInfo);
//     }
//   }

//   const handleSubmit =(e)=>{
    
//     if(newUser && user.email && user.password){
//       console.log(user.email,user.password,"subbmit");
//       const auth = getAuth();
//       createUserWithEmailAndPassword(auth,user.email, user.password)
//   .then(res => {
//     const user = res.user;
//     console.log(res);
//     const newUserInfo ={...user};
//     newUserInfo.error = '';
//     newUserInfo.success = true;
//     setUser(newUserInfo);
//     updateUserName(user.name);
//   })
//   .catch(error => {
//     // const errorCode = error.code;
//     // const errorMessage = error.message;
//     // console.log(errorCode,errorMessage);
//     const newUserInfo ={...user};
//     newUserInfo.error = error.message;
//     newUserInfo.success = false;
//     setUser(newUserInfo);
//     // ..
//   });
//     }

//     if(!newUser && user.email && user.password){
//       signInWithEmailAndPassword(auth, user.email, user.password)
//       .then(res => {
//         const user = res.user;
//         console.log(res);
//         const newUserInfo ={...user};
//         newUserInfo.error = '';
//         newUserInfo.success = true;
//         setUser(newUserInfo);
//         setLoggedInUser(newUserInfo);
//         history.replace(from);
//         console.log('sing is user info',res.user);
//       })
//       .catch(error => {
//         // const errorCode = error.code;
//         // const errorMessage = error.message;
//         // console.log(errorCode,errorMessage);
//         const newUserInfo ={...user};
//         newUserInfo.error = error.message;
//         newUserInfo.success = false;
//         setUser(newUserInfo);
        
//       });
//     }
//     e.preventDefault();
//   }

//   const updateUserName =name =>{
//     const auth = getAuth();
//     updateProfile(auth.currentUser, {
//     displayName: name
//     }).then(res => {
//       console.log("update user name successfully")
//     }).catch((error) => {
//       console.log(error)
//     });
//   }

//   return (
//    <div style={{textAlign:'center'  }}>
//      {
//        user.isSignedIn ?<button onClick={handleSignOut} >SignOut</button> :
//        <button onClick={handleGoogleSignIn} >SignIn</button>

//     }

//     <br />
//     <button onClick={handleFbSignIn}>Sign In With Facebook</button>

//      {
//        user.isSignedIn && <div>
//          <p>Welcome,{user.name}</p>
//          <p>Your email:{user.email}</p>
//          <img src={user.photo} alt="" srcset="" />
//       </div>
//      }

//      <div>
//        {/* <h1>Our own Authentication</h1>
//        <p>Name:{user.name}</p>
//        <p>Email:{user.email}</p>
//        <p>Password:{user.password}</p> */}
//        <input type="checkbox" onChange={()=>setNewUser(!newUser)} name="" id="" />
//        <form onSubmit={handleSubmit}>
//         {newUser && <input type="text" name="name" id="" onBlur={handleBlur} placeholder='input your name' required />}
//          <br />
//          <input type="text" name="email" id="" onBlur={handleBlur} placeholder='input your email address' required/>
//          <br />
//          <input type="password" name="password" onChange={handleBlur} id="" placeholder='a-zA-Z0-9!@#$%^&* ' required />
//          <br />
//          <input type="submit" value={newUser ? 'Sign In' :'Sign Up  '} />
//        </form>

//        <p style={{ color:'red' }}>{user.error}</p>
//        {user.success && <p style={{ color:'green' }}>User {newUser ? "Created" : "Logged In"} Successfully</p>}
//      </div>
//    </div>
//   );
// }

// export default Login;






// -------------------------------------------
import React, { useState } from 'react';
import { UserContext } from './../../App';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework } from './loginManager';



function Login() {
  const [newUser,setNewUser]=useState(false);
  const [user,setUser] = useState({
    isSignedIn: false,
    name: '',
    email:'',
    password:'',
    photo:''

  });

  initializeLoginFramework();
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  const history= useHistory();
  const location = useLocation();


  let { from } = location.state || { from: { pathname: "/" } };
 
 const googleSignIn = () =>{
   handleGoogleSignIn()
   .then(res =>{
     setUser(res);
     setLoggedInUser(res);
     history.replace(from);
   })
 }



 const fbSignIn = () =>{
   handleFbSignIn()
   .then(res =>{
    setUser(res);
    setLoggedInUser(res);
    history.replace(from);
  })
 }



 const signOut =()=>{
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
   <div style={{textAlign:'center'  }}>
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

