import React, { useState } from 'react';
import "./../styles/auth.css"
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const UpdateProfile = () => {
    const [user] = useAuthState(auth);
    const { email } = user;
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDoB] = useState("");
    const [age, setAge] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();

    const handleNameBlur = (e) =>{
        setName(e.target.value);
    };
    const handleGenderBlur = (e) => {
        setGender(e.target.value);
    };
    const handleDoBBlur = (e) => {
        setDoB(e.target.value);
    }; 
    const handleAgeBlur = (e) => {
        setAge(e.target.value);
    }; 
    const handlePhoneBlur = (e) => {
        setPhone(e.target.value);
    }; 

    const handleProfileUpdate = (e) => {
        const updateProfile = {
            name,
            gender,
            dob,
            age,
            phone
        };
        fetch(`https://infinite-shelf-47882.herokuapp.com/user/${email}`, {
                method: "PUT",
                headers: {
                "content-type": "application/json",
                },
                body: JSON.stringify(updateProfile),
            })
            .then((res) => res.json())
            .then((result) => {
                if (result.matchedCount > 0) {
                    navigate("/");
                }
            });

        e.preventDefault();        
    }
    return (
        <div className="form-container">
      <div>
        <h1 className="form-title" >Update Profile</h1>
        <form onSubmit={handleProfileUpdate}>
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
                type="email"
                name="email"
                value={email}
                required
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="gender">Gender</label>
            <div>
              <input
                onBlur={handleGenderBlur}
                type="text"
                name="gender"
                required
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="dob">DoB</label>
            <div>
              <input
                onBlur={handleDoBBlur}
                type="date"
                name="dob"
                required
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="age">Age</label>
            <div>
              <input
                onBlur={handleAgeBlur}
                type="text"
                name="age"
                required
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <div>
              <input
                onBlur={handlePhoneBlur}
                type="number"
                name="phone"
                required
              />
            </div>
          </div>
          <button type="submit" className="form-submit">
                Update
          </button>
        </form>
      </div>
    </div>
    );
};

export default UpdateProfile;