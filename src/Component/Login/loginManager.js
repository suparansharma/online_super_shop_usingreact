// import "firebase/auth";
// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   signInWithPopup,
//   GoogleAuthProvider,
//   signOut,
//   updateProfile,
//   FacebookAuthProvider,
//   updateCurrentUser,
// //   createUserWithEmailAndPassword,
// //   signInWithEmailAndPassword
// } from "firebase/auth";
// import firebaseConfig from "./firebase.config";

// export const initializeLoginFramework = () => {
//   const app = initializeApp(firebaseConfig);
// };
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();
// const fbProvider = new FacebookAuthProvider();



// export const handleGoogleSignIn = () => {
//   return signInWithPopup(auth, googleProvider)
//     .then((res) => {
//       const { displayName, email, photoURL } = res.user;
//       const signedInUser = {
//         isSignedIn: true,
//         name: displayName,
//         email: email,
//         photo: photoURL,
//         success:true
//       };
//       return signedInUser;
//       console.log(displayName, email, photoURL);
//     })
//     .catch((err) => {
//       console.log(err);
//       console.log(err.message);
//     });
// };

// export const handleFbSignIn = () => {
//   const auth = getAuth(app);
//   return signInWithPopup(auth, fbProvider)
//     .then((result) => {
//       // The signed-in user info.
//       const user = result.user;
//       user.success=true;
//       return user;

//       // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//     //   const credential = FacebookAuthProvider.credentialFromResult(result);
//     //   const accessToken = credential.accessToken;
//     //   console.log(user);

//       // ...
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.email;
//       // The AuthCredential type that was used.
//       const credential = FacebookAuthProvider.credentialFromError(error);

//       console.log(errorCode, errorMessage, email, credential);

//       // ...
//     });
// };

// export const handleSignOut = () => {
//   return signOut(auth)
//     .then((res) => {
//       const signedOutUser = {
//         isSignedIn: false,
//         name: "",
//         photo: "",
//         email: "",
//         error: "",
//         success: false,
//       };
//       return signedOutUser;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// export const createUserWithEmailAndPassword = (name,email,password) =>{
//   const auth = getAuth();
//   return createUserWithEmailAndPassword(email,password)
//     .then(res => {

//       const newUserInfo = res.user;
//       newUserInfo.error ='';
//       newUserInfo.success = true;
//       updateUserName(name);
//       return newUserInfo;
//     })
//     .catch((error) => {
//       // const errorCode = error.code;
//       // const errorMessage = error.message;
//       // console.log(errorCode,errorMessage);
//       const newUserInfo = {};
//       newUserInfo.error = error.message;
//       newUserInfo.success = false;
//       return newUserInfo;
//       // ..
//     });
// };

// export const signInWithEmailAndPassword = (email,password) => {
//   return signInWithEmailAndPassword( email,password)
//     .then((res) => {
//     //   const user = res.user;
//       const newUserInfo = res.user;
//       newUserInfo.error = '';
//       newUserInfo.success = true;
//       return newUserInfo;
//     })
//     .catch((error) => {
//       // const errorCode = error.code;
//       // const errorMessage = error.message;
//       // console.log(errorCode,errorMessage);
//       const newUserInfo = {};
//       newUserInfo.error = error.message;
//       newUserInfo.success = false;
//       return newUserInfo;
//     });
// };

// const updateUserName = (name) => {
//   const auth = getAuth();
//   updateCurrentUser(auth.currentUser, {
//     displayName: name,
//   })
//     .then((res) => {
//       console.log("update user name successfully");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// ================================================

import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth,signInWithPopup,GoogleAuthProvider,signOut, updateProfile, FacebookAuthProvider  } from "firebase/auth";
import firebaseConfig from './firebase.config';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { firebase } from 'firebase/app';


export const initializeLoginFramework = () =>{

    // if(firebase.app.length ===0){
    //     const app = initializeApp(firebaseConfig);
    //     const auth = getAuth(app);
    // }
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
   
}


export const handleGoogleSignIn =()=>{
    const googleProvider = new GoogleAuthProvider();
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
   return signInWithPopup(auth, googleProvider)
    .then(res => {
      const {displayName,email,photoURL}=res.user;
      const signedInUser ={
        isSignedIn:true,
        name:displayName,
        email:email,
        photo:photoURL,
        success:true
      };
      return signedInUser;
      
    })
    .catch(err =>{ 
      console.log(err);
      console.log(err.message);
    })
  
    }



    export const handleFbSignIn =() =>{
        const fbProvider = new FacebookAuthProvider();
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        return signInWithPopup(auth, fbProvider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        user.success=true;
        return user;
       
    
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
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
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
    
export const createUserWithEmailAndPassword = (name,email,password) =>{
    
    const auth = getAuth();
    return createUserWithEmailAndPassword(email,password)
.then(res => {
    const newUserInfo =res.user;
    newUserInfo.error = '';
    newUserInfo.success = true;
  updateUserName(name);
  return newUserInfo;
 
})
.catch(error => {
  // const errorCode = error.code;
  // const errorMessage = error.message;
  // console.log(errorCode,errorMessage);
  const newUserInfo ={};
  newUserInfo.error = error.message;
  newUserInfo.success = false;
  return newUserInfo;

  // ..
});
}


export const signInWithEmailAndPassword = (email,password) =>{
   return signInWithEmailAndPassword( email, password)
    .then(res => {
  
      const newUserInfo =res.user;
      newUserInfo.error = '';
      newUserInfo.success = true;
     return newUserInfo;
    })
    .catch(error => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // console.log(errorCode,errorMessage);
      const newUserInfo ={};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
       return newUserInfo;
      
    });
}



const updateUserName =name =>{
    const auth = getAuth();
    updateProfile(auth.currentUser, {
    displayName: name
    }).then(res => {
      console.log("update user name successfully")
    }).catch((error) => {
      console.log(error)
    });
  }
  