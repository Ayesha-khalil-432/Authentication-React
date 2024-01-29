import React, { useState } from "react";
import "./style.css";
import axios from "axios";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [username, setUsername] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleSignup = async () => {
        if (!name) {
            return;
        } else if (!email) {
            return;
        } else if (!password) {
            return;
        } else if (!phoneNumber) {
            return;
        } else if (!username) {
            return;
        } else {
            const dataToPost = {
                "name": name,
                "email": email,
                "password": password,
                "phoneNumber": phoneNumber,
                "username": username,
            }
            await axios.post('https://up-time-down-time.vercel.app/api/v1/auth/signup', dataToPost).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })
        }
    };

    return (
        <>
            <div className="signup_input">
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
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
                <div>
                    <label>Phone Number:</label>
                    <input
                        type="tel"
                        placeholder="Enter your phone number"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        required
                    />
                </div>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={handleUsernameChange}
                        required
                    />
                </div>
                <button onClick={handleSignup}>Signup</button>
            </div>
        </>
    );
};

export default Signup;
