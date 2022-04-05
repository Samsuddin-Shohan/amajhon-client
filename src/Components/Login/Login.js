import React from 'react';
import { Link } from 'react-router-dom';
import {
    useHistory,
    useLocation,
} from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth/useAuth';
import useFirebase from '../../hooks/useFirebase/useFirebase';
import './Login.css';

const Login = () => {
    const { googleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/shop';
    const handleGoogleSignIn = () => {
        googleSignIn().then((result) => {
            history.push(redirect_url);
        });
    };

    return (
        <div className='d-flex justify-content-center items-center login'>
            <div>
                <h1>Please Login</h1>
                <input type='text' name='' id='' placeholder='Your email' />
                <input
                    type='password'
                    name=''
                    id=''
                    placeholder='Your password'
                />

                <input type='submit' value='Submit' />
                <p>
                    New User? <Link to='/register'>Sign Up here</Link>
                </p>
                <div>--------or---------</div>
                <button
                    className='btn btn-warning mt-3'
                    onClick={handleGoogleSignIn}
                >
                    Google Sign in
                </button>
            </div>
        </div>
    );
};

export default Login;
