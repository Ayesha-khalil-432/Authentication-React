import { useEffect, useState } from "react";
import React from "react";
import './style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigateTo = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async () => {
        if (!email || !password) {
            console.log("Please enter both email and password");
            return;
        } else {
            const dataTopost = {
                "username": email,
                "password": password,
            }
            await axios.post('https://up-time-down-time.vercel.app/api/v1/auth/login', dataTopost).then((res) => {
                console.log('>.>>>>>....', res.data.user);
                navigateTo('/login-successful', { userData: res.data.userData });
            }).catch((err) => {
                console.log(err);
            })
        }
    };
    return (
        <>
            <div className="login_input">
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    /></div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <button onClick={handleLogin}>Login</button>
                <ToastContainer />
            </div>

        </>
    );
}

export default Login;