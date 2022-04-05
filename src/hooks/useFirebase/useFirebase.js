import { useEffect, useState } from 'react';
import firebaseInitialization from '../../Firebase/firebase.init';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';

firebaseInitialization();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    };
    const logOut = () => {
        signOut(auth).then(() => {
            // setUser({});
        });
    };
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
    }, []);
    return {
        googleSignIn,
        user,
        error,
        logOut,
    };
};
export default useFirebase;
