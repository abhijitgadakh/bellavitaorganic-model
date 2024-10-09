import React, { useState } from "react";
import "./Login.css"; // Import CSS styles
import userData from "../data/user-data.json"; // Import user data from JSON
import { useNavigate } from "react-router-dom";

const Login = ({ setUserName }) => {
  const navigate = useNavigate(); // Hook to navigate
  const [isSignUp, setIsSignUp] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  // Handle OTP sending
  const handleSendOtp = () => {
    if (mobileNumber.length === 10) {
      setOtpSent(true); // Simulate sending OTP
      setError("");
    } else {
      setError("Please enter a valid 10-digit mobile number.");
    }
  };

  // Verify the OTP
  const handleVerifyOtp = () => {
    if (otp === "1234") {
      setIsVerified(true);
      setError("");
    } else {
      setError("Please enter the correct OTP.");
    }
  };

  // Handle Login
  const handleLogin = () => {
    const user = userData.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setUserName(user.name); // Update the userName in the parent component
      localStorage.setItem("userName", user.name); // Save userName in local storage
      navigate("/"); // Redirect to home page
    } else {
      setError("Wrong credentials. Please try again.");
    }
  };

  // Handle sign-up logic with password matching
  const handleSubmitSignUp = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const username = email.split("@")[0]; // Extract name from email before '@'
    const newUser = {
      name: username,
      email,
      phone: mobileNumber,
      password,
      dateofcreation: new Date().toISOString(),
    };

    // Save user data to Local Storage
    localStorage.setItem("userData", JSON.stringify(newUser));

    // Update userName in the parent component
    setUserName(username);
    // Redirect to home with success message
    navigate("/", { state: { message: "Account created successfully" } });
  };

  return (
    <div className="login-container">
      <h2>{isSignUp ? "Sign Up" : "Log In"}</h2>

      {isSignUp ? (
        <>
          <p>Enter Mobile Number</p>
          <p>We will send you an OTP to verify your number</p>
          <input
            type="text"
            placeholder="+91 Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <button
            className="btn-login"
            onClick={handleSendOtp}
            disabled={mobileNumber.length !== 10}
          >
            Send OTP
          </button>

          {otpSent && !isVerified && (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button className="btn-login" onClick={handleVerifyOtp}>
                Verify
              </button>
              <small>For testing purposes, use OTP: 1234</small>
            </>
          )}

          {isVerified && (
            <>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button className="btn-login" onClick={handleSubmitSignUp}>
                Sign Up
              </button>
            </>
          )}

          <p className="error">{error}</p>
          <p className="signin-click" onClick={() => setIsSignUp(false)}>
            Already a user? Log in now
          </p>
        </>
      ) : (
        <>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn-login" onClick={handleLogin}>
            Log In
          </button>
          <p className="error">{error}</p>
          <p className="signin-click" onClick={() => setIsSignUp(true)}>
            New user? Sign up now
          </p>
        </>
      )}
    </div>
  );
};

export default Login;
