import React from 'react';
import { Box, Container, Typography, Button, Divider, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from "react-query";
import Loader from './Loader';

const ProfileWrapper = styled(Box)`
    margin: 20px 0;
    padding: 20px ;
    background: #cfe8fc;
    border-radius: 10px;
    height: 80vh;
`;
const ProfileContainer = styled(Box)`
    margin-top: 20px;    
`;
const Title = styled(Typography)`
    text-align: center;
    font-weight: 600;
`;
const ProfileInfoText = styled(Typography)`
    padding: 15px;
    background-color: #ffff;
    border-radius: 10px;
    margin-bottom: 5px;
`;
const UpdateButton = styled(Button)`
    margin-top: 15px;
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

const Profile = () => {
    const [user] = useAuthState(auth);
    const { email } = user;
    const {
        data,
        isLoading
        } = useQuery("user", () =>
        fetch(`https://api.render.com/deploy/srv-cge3tgqk728lv80s4kb0?key=zS0ZfME3Q3c/user/${email}`).then((res) => res.json())
        );

        if(isLoading){
            return <Loader />
          }

    return (
        <section>
            <Container maxWidth="sm">
                <ProfileWrapper>
                    <Title variant="h4" gutterBottom component="div">
                        My Profile
                    </Title>
                    <Divider />
                    <ProfileContainer>
                        <ProfileInfoText> 
                            Name : { data?.name ? data?.name : "Please update your name."}
                        </ProfileInfoText>
                        <ProfileInfoText> 
                            Email : { email }
                        </ProfileInfoText>
                        <ProfileInfoText> 
                            Gender : {data?.gender ? data?.gender : "Please update your gender."}
                        </ProfileInfoText>
                        <ProfileInfoText> 
                            DoB : {data?.dob ? data?.dob : "Please update your DoB."}
                        </ProfileInfoText>
                        <ProfileInfoText> 
                            Age : {data?.age ? data?.age : "Please update your age."}
                        </ProfileInfoText>
                        <ProfileInfoText> 
                            Phone : {data?.phone ? data?.phone : "Please update your contact number."}
                        </ProfileInfoText>
                        <UpdateButton>                            
                            <Link  to="/updateProfile">
                                Update Profile
                            </Link>
                        </UpdateButton>
                    </ProfileContainer>
                </ProfileWrapper>
            </Container>
        </section>
    );
};

export default Profile;