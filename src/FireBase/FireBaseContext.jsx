// import { createContext ,useContext} from "react";
// import { initializeApp } from "firebase/app";
// import { getDatabase ,set,ref} from "firebase/database";
// import { getAuth , createUserWithEmailAndPassword } from "firebase/auth";
 

// const firebaseConfig = {
//     apiKey: "AIzaSyD7sUmCwmx9dDxJGu9oehaoEmJKUtqm9k8",
//     authDomain: "ecommerce-react-bootstrap.firebaseapp.com",
//     projectId: "ecommerce-react-bootstrap",
//     storageBucket: "ecommerce-react-bootstrap.firebasestorage.app",
//     messagingSenderId: "1037311556996",
//     appId: "1:1037311556996:web:be63b4466ac8b13f8cf1d1",
//     measurementId: "G-6RYMH8LCQW",
//     databaseURL:"https://console.firebase.google.com/project/ecommerce-react-bootstrap/database/ecommerce-react-bootstrap-default-rtdb/data/~2F"
//   };
//   const FirebaseContext = createContext(null);
//   const FireBaseApp  = initializeApp(firebaseConfig);
//   const FireBaseAuth = getAuth(FireBaseApp);
//   const database = getDatabase(FireBaseApp);

//   export const useFirebase = ()=> useContext(FirebaseContext)
   

//   export const FirebaseProvider =(props)=>{
//       const SignUpwithEmailandPassword =(email,password)=>{
//         return createUserWithEmailAndPassword(FireBaseAuth,email,password);
//       }
//       const putData = (key,data)=>set(ref(database,key),data);

//     return <FirebaseContext.Provider value={{SignUpwithEmailandPassword,putData}}>
//         {props.children}
//     </FirebaseContext.Provider>
//   }
  