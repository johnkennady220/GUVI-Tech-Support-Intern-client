import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from './../firebase.init';
import "../styles/auth.css";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword] =
        useCreateUserWithEmailAndPassword(auth);

    const handleNameBlur = (e) =>{
        setName(e.target.value);
    };
    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordBlur = (e) => {
        setPassword(e.target.value);
    };
    const handleConfirmPasswordBlur = (e) => {
        setConfirmPassword(e.target.value);
    };  

    const handleRegister = async(event) => {
        event.preventDefault();

        if(email && password && confirmPassword === password){
            await createUserWithEmailAndPassword(email, password);
            navigate("/");
          }
    }
  return (
    <div className="form-container">
      <div>
        <h1 className="form-title" >Register</h1>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <div>
              <input
                onBlur={handleNameBlur}
                type="text"
                name="name"
                required
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <div>
              <input
                onBlur={handleEmailBlur}
                type="email"
                name="email"
                required
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div>
              <input
                onBlur={handlePasswordBlur}
                type="password"
                name="password"
                required
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <div>
              <input
                onBlur={handleConfirmPasswordBlur}
                type="password"
                name="confirmPassword"
                required
              />
            </div>
          </div>
          <button type="submit" className="form-submit">
            Register
          </button>
        </form>
        <p className="form-query">
          Already have an account ?{" "}
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
    )
};

export default Register;