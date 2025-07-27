import React, { useState } from "react";
import loginStyles from "./login.module.css";
import {useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(true);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email.");
            return;
        }
        if (!password) {
            return alert("Please enter a password.");
        }
        if (rememberMe) localStorage.setItem("auth", JSON.stringify({ email, password, rememberMe }));
        navigate("/home");
    };

    return (
        <div className={loginStyles.loginBody}>
            <div className={loginStyles.loginContainer}>
                <h2>Log in to your Account</h2>
                <p>Welcome back! Select method to log in:</p>
                <br />
                <div className={loginStyles.socialLogin}>
                    <button className={loginStyles.google} onClick={() => {
                        localStorage.setItem("auth", JSON.stringify({ authProvider: "facebook", rememberMe: true }));
                        navigate("/home");
                    }}>Google</button>
                    <button className={loginStyles.facebook} onClick={() => {
                        localStorage.setItem("auth", JSON.stringify({ authProvider: "facebook", rememberMe: true }));
                        navigate("/home");
                    }}>Facebook</button>
                </div>
                <p>or continue with email</p>
                <form className={loginStyles.loginForm} onSubmit={(e) => { handleLogin(e) }}>
                    <div className={loginStyles.inputGroup}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={loginStyles.inputGroup}>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className={loginStyles.checkbox}
                    >
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                        />
                        Remember me
                    </div>
                    <button className={loginStyles.loginButton} onClick={handleLogin}>Log in</button>
                    <div className={loginStyles.register}>Don't have an account?
                        <div className={loginStyles.createAccount} onClick={() => navigate("/signup")}>
                            Create an account</div>
                    </div>
                </form >
            </div >
        </div>
    );
};

export default Login;