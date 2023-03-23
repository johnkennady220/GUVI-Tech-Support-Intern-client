import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../firebase.init';
import "../styles/auth.css";
import toast from 'react-hot-toast';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';


    if(user){
        navigate(from, { replace : true });
    }

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    const handleUserSignIn = event =>{
        event.preventDefault();
        if(email && password){
            signInWithEmailAndPassword(email, password);
            navigate("/");
        }
        toast.success(" Logged in Successfully !!!");
    }

    return (
        <div className="form-container">
            <div>
                <h3 className="form-title">Login</h3>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="1" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="2" required />
                    </div>
                    <input  className="form-submit" type="submit" value="Login" />
                </form>
                <p className="form-query">
                    New here ?{" "}
                    <Link className="form-link" to="/register">
                        Create an account
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;