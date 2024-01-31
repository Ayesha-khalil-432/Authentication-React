import React from "react";
import './style.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SuccessfulLoginPage = ({ userData }) => {
    const navigateTo = useNavigate();

    const handleLogoutClick = async () => {
        await axios.get('https://up-time-down-time.vercel.app/api/v1/auth/logout').then(() => {
            console.log('logged out');
            navigateTo('/');
        }).catch((err) => {
            console.log('unable to logout', err);
        })
        navigateTo('/');
    }
    return (
        <div className="whole_screen">
            <h2>Welcome, {userData}!</h2>
            <p>Email: {userData?.email}</p>
            <p>Phone Number: {userData?.phoneNumber}</p>
            <button onClick={handleLogoutClick}>Logout</button>
        </div>
    );
}

export default SuccessfulLoginPage;