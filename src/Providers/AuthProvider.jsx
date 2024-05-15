import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import axios from "axios";





export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, image) =>{

        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    const signIn =(email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);

    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{

        const unSubscribe = onAuthStateChanged(auth, currentUser =>{

            const userEmail = currentUser?.email || user.email;
            const loggedUser = {email: userEmail};
            setLoading(false);

             setUser(currentUser);

             if(currentUser){
                
                axios.post('https://crud-alternative-product-server.vercel.app/jwt',loggedUser, {withCredentials: true})
                .then(res =>{
                    console.log('token response', res.data);
                })
             }
             else{
                axios.post('https://crud-alternative-product-server.vercel.app/logout', loggedUser,{
                    withCredentials: true
                })
                .then(res =>{
                    console.log(res.data);
                })
             }
         });
         return () =>{
             unSubscribe();
         }
 
     }, [loading])

    const authInfo = {
        user,
        createUser,
        signIn,
        updateUserProfile,
        googleLogIn,
        loading,
        setLoading,
        logOut
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;