import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';
import './register.css';

const Register = () => {
    const { googleSignIn } = useAuth();
    return (
        <div className='d-flex justify-content-center items-center login'>
            <div>
                <h1>Please Register</h1>
                <input type='text' name='' id='' placeholder='Your email' />
                <input
                    type='password'
                    name=''
                    id=''
                    placeholder='Your password'
                />
                <input
                    type='password'
                    name=''
                    id=''
                    placeholder='Re-enter password'
                />
                <input type='submit' value='Submit' />
                <p>
                    Already Have an account? <Link to='/login'>Login</Link>
                </p>
                <div>--------or---------</div>
                <button className='btn btn-warning mt-3' onClick={googleSignIn}>
                    Google Sign in
                </button>
            </div>
        </div>
    );
};

export default Register;
