import React from 'react';
import { Grid, Button, styled } from '@mui/material';
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from 'firebase/auth';
import auth from './../firebase.init';
import { Link } from 'react-router-dom';
import guviLogo from "../assets/images/guvi-logo.png";
import { toast } from 'react-hot-toast';


const Headeing = styled(Grid)(({theme})=>({
    padding: '15px 100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: 700,
    backgroundColor: "#fff",
    [theme.breakpoints.down('md')] : {
        padding: '15px 5px',
        fontWeight: 600
    }
}))

const AuthBtn = styled(Button)`
    outline: none;
    background: green;    
    padding: 5px 15px;
    cursor: pointer;
    font-weight: 500;
    border-radius: 5px;
    & a{
        text-decoration: none;
        color: white;
    }
`;

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
      signOut(auth);
      toast.success("Successfully Logout!!!", {
        duration: 3000,
        style: {
          background: "black",
          color: "white",
        },
      });
    };
    return (
        <Headeing>
            <img src={guviLogo} alt="guviLogo"  width="120" height="60" />
            <AuthBtn>
                {
                    user?.uid ? 
                    (<Link onClick={handleSignOut}  to="/login">
                        Sign Out
                    </Link> )
                    : (<Link  to="/login">
                        Login
                    </Link>)
                }
            </AuthBtn>
        </Headeing>
    );
};

export default Header;