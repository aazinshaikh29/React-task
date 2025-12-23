import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    alert("Login Successful (Demo)");
  };

  return (
    <div className="login-wrapper">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Welcome back</h2>
        <p className="subtitle">
          Enter your details to get sign in to your account
        </p>

        <label>Email</label>
        <input
          type="email"
          placeholder="e.g username@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="forgot">
          <Link to="/forgotPassword">Forgot Password?</Link>
        </div>

        <button type="submit" className="continue-btn">
          Continue
        </button>
      </form>
    </div>
  );
}
