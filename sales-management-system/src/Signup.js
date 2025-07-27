import React, { useState } from "react";
import signupStyles from "./signup.module.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(true);
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email.");
            return;
        }
        if (!password || !confirmPassword) {
            return alert("Please enter a password and confirm it.");
        }
        if (password !== confirmPassword) {
            return alert("Passwords do not match.");
        }
        if (rememberMe) localStorage.setItem("auth", JSON.stringify({ email, password, rememberMe }));
        navigate("/home");
    };

    return (
        <div className={signupStyles.signupBody}>
            <div className={signupStyles.signupContainer}>
                <h2>Create an Account</h2>
                <p>Sign up to start using our platform:</p>
                <br />
                <div className={signupStyles.socialSignup}>
                    <button
                        className={signupStyles.google}
                        onClick={() => {
                            localStorage.setItem("auth", JSON.stringify({ authProvider: "google", rememberMe: true }));
                            navigate("/home");
                        }}
                    >
                        Google
                    </button>
                    <button
                        className={signupStyles.facebook}
                        onClick={() => {
                            localStorage.setItem("auth", JSON.stringify({ authProvider: "facebook", rememberMe: true }));
                            navigate("/home");
                        }}
                    >
                        Facebook
                    </button>
                </div>
                <p>or continue with email</p>
                <form className={signupStyles.signupForm} onSubmit={(e) => { handleSignup(e) }}>
                    <div className={signupStyles.inputGroup}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={signupStyles.inputGroup}>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className={signupStyles.inputGroup}>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className={signupStyles.checkbox}>
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                        />
                        Remember me
                    </div>
                    <button className={signupStyles.signupButton} onClick={handleSignup}>Sign Up</button>
                    <div className={signupStyles.loginRedirect}>
                        Already have an account? <span className={signupStyles.loginLink} onClick={() => navigate("/login")}>Log in</span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
