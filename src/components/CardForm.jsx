import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUrl } from "../URL";

const CardForm = ({ initialName, userEmail }) => {
  const [name, setName] = useState(initialName || "");
  const [email, setEmail] = useState(userEmail || "");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/user/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        const { name, email, gender, country } = response.data;
        setName(name || "");
        setEmail(email || "");
        setGender(gender || "");
        setCountry(country || "");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const toggleEditMode = () => {
    if (isEditable) {
      const updatedData = { name, email, gender, country };
      axios
        .put(`${baseUrl}/api/user/profile`, updatedData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        })
        .then(() => {
          toast.success("Profile updated successfully!");
          setIsEditable(false);
        })
        .catch((error) => {
          toast.error("Failed to update profile.");
          console.error(error);
        });
    } else {
      setIsEditable(true);
    }
  };

  return (
    <div className="cardForm">
      <div className="profileInfo">
        <div className="user">
          <img src="./Ellipse 11.png" alt="Profile" />
          <span>{name || "Name"}</span>
        </div>
        <button onClick={toggleEditMode} className="updateBtn">
          {isEditable ? "Save" : "Edit"}
        </button>
      </div>

      <div className="profileInput">
        <div className="profileInput-leftPart">
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!isEditable}
            />
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              id="gender"
              placeholder="Enter your gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              disabled={!isEditable}
            />
          </div>
        </div>
        <div className="profileInput-rightPart">
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              value={email}
              disabled
            />
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              placeholder="Enter your country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              disabled={!isEditable}
            />
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
};

export default CardForm;
