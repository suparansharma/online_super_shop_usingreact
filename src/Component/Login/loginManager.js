import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth,signInWithPopup,GoogleAuthProvider,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword, updateProfile, FacebookAuthProvider  } from "firebase/auth";
import firebaseConfig from './firebase.config';


export const initializeLoginFramework =() =>{
    const app = initializeApp(firebaseConfig);
}
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();
export const handleGoogleSignIn =()=>{
return signInWithPopup(auth, googleProvider)
.then(res => {
  const {displayName,email,photoURL}=res.user;
  const signedInUser ={
    isSignedIn:true,
    name:displayName,
    email:email,
    photo:photoURL
  }
  return signedInUser;
  console.log(displayName,email,photoURL);
})
.catch(err =>{ 
  console.log(err);
  console.log(err.message);
})

}
;


export const handleFbSignIn =() =>{
    const auth = getAuth(app);
    return signInWithPopup(auth, fbProvider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
    return user;
    
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    console.log(user);

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    console.log(errorCode,errorMessage,email,credential);

    // ...
  });

  }

  export const handleSignOut =()=>{
    return signOut(auth).then(res => {
      const signedOutUser = {
        isSignedIn:false,
        name:'',
        photo:'',
        email:'',
        error:'',
        success:false

      }
      return signedOutUser;
      
    })
    .catch((error) => {
      console.log(error);
    });
  }

//   export const createUserWithEmailAndPassword = () =>{
//     console.log(user.email,user.password,"subbmit");
//     const auth = getAuth();
//     createUserWithEmailAndPassword(auth,user.email, user.password)
// .then(res => {
//   const user = res.user;
//   console.log(res);
//   const newUserInfo ={...user};
//   newUserInfo.error = '';
//   newUserInfo.success = true;
//   setUser(newUserInfo);
//   updateUserName(user.name);
// })
// .catch(error => {
//   // const errorCode = error.code;
//   // const errorMessage = error.message;
//   // console.log(errorCode,errorMessage);
//   const newUserInfo ={...user};
//   newUserInfo.error = error.message;
//   newUserInfo.success = false;
//   setUser(newUserInfo);
//   // ..
// });
//   }


//   export const signInWithEmailAndPassword = () =>{
//     signInWithEmailAndPassword(auth, user.email, user.password)
//     .then(res => {
//       const user = res.user;
//       console.log(res);
//       const newUserInfo ={...user};
//       newUserInfo.error = '';
//       newUserInfo.success = true;
//       setUser(newUserInfo);
//       setLoggedInUser(newUserInfo);
//       history.replace(from);
//       console.log('sing is user info',res.user);
//     })
//     .catch(error => {
//       // const errorCode = error.code;
//       // const errorMessage = error.message;
//       // console.log(errorCode,errorMessage);
//       const newUserInfo ={...user};
//       newUserInfo.error = error.message;
//       newUserInfo.success = false;
//       setUser(newUserInfo);
      
//     });
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