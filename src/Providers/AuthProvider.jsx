import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../firebase/firebase.config";



export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, image) =>{

        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    const authInfo = {
        user,
        createUser,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;