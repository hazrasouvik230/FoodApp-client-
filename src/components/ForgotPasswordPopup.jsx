import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { baseUrl } from "../URL";

const ForgotPasswordPopup = ({ email, onClose }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordUpdate = () => {
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (newPassword.length < 8) {
      toast.error("Password must be at least 8 characters!");
      return;
    }

    axios
      .post(`${baseUrl}/api/user/update-password`, { email, newPassword })
      .then((res) => {
        toast.success("Password updated successfully!");
        onClose();
      })
      .catch((err) => {
        const errorMessage = err.response?.data?.message || "Something went wrong!";
        toast.error(errorMessage);
      });
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Forgot Password</h2>
        <p>Email: {email}</p>
        <div>
          <label htmlFor="newPassword">New Password</label>
          <input
            className="input"
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="input"
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="btnSection">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handlePasswordUpdate}>Update Password</button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPopup;
