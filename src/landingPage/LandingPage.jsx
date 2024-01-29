import React from "react";
import './style.css';
import Login from "../login/Login";
import { useState } from "react";
import Signup from "../signup/Signup";

const LandingPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isSignUp, setIsSignUp] = useState(false);

    const handleAccountClick = () => {
        setIsLogin(true);
        setIsSignUp(false);
    }

    const handleNoAccountClick = () => {
        setIsLogin(false);
        setIsSignUp(true);
    }

    return (
        <>
            <div className="main_div"></div>
            <div className="modal">
                {
                    isLogin &&
                    <div className="modal_data">
                        <Login />
                        <p onClick={handleNoAccountClick}><u>Don't have an account?</u></p>
                    </div>
                }
                {
                    isSignUp &&
                    <div className="modal_data">
                        <Signup />
                        <p onClick={handleAccountClick}><u>Already have an account?</u></p>
                    </div>
                }
            </div>
        </>
    );
}

export default LandingPage;