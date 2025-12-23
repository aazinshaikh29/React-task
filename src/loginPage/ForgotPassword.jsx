import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg("");

    if (!email) {
      setMsg("Email is required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMsg("Enter a valid email");
      return;
    }

    const admin = JSON.parse(localStorage.getItem("admin"));

    if (email === admin.email) {
      setMsg("Password reset link sent ✔");
    } else {
      setMsg("Email not registered ❌");
    }
  };

  return (
    <div className="forgot-container">
      <div className="forgot-card">
        <div className="icon">📧</div>

        <h2>Forgot your password?</h2>
        <p className="subtitle">
          Enter your email and we will send you a password reset link
        </p>

        {msg && <p className="success">{msg}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="e.g. user@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">Send Email</button>
        </form>

        <p className="back" onClick={() => navigate("/")}>
          ← Back to Login
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
