import React, { useState } from "react";
import "./ChangePassword.css";

export default function ChangePassword() {
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const getStrength = () => {
    if (newPass.length === 0) return "";
    if (newPass.length < 4) return "Weak";
    if (newPass.length < 8) return "Good";
    return "Excellent";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newPass || !confirmPass) {
      alert("Please fill all fields");
      return;
    }

    if (newPass !== confirmPass) {
      alert("Passwords do not match");
      return;
    }

    if (newPass.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    alert("Password Reset Successful (Demo)");
  };

  return (
    <div className="cp-wrapper">
      <div className="cp-box">

        

        <h2>Reset password</h2>
        <p className="cp-subtitle">Please kindly set your new password</p>

        <form onSubmit={handleSubmit}>
          <label>New password</label>
          <input
            type="password"
            placeholder="Enter new password"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
          />

          {newPass && (
            <div className="cp-strength">
              <div className={`cp-bar ${getStrength().toLowerCase()}`}></div>
              <span>Password strength: {getStrength()}</span>
            </div>
          )}

          <label>Re-enter password</label>
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
          <label>Re-enter</label>

          <button type="submit" className="cp-btn">
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
}
