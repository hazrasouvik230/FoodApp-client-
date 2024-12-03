import React from "react";
import CardForm from "../components/CardForm";
import CardList from "../components/CardList";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const userName = localStorage.getItem("userName") || "";
  const userEmail = localStorage.getItem("userEmail") || "";

  const navigate = useNavigate();

  return (
    <div className="profile">
      <p className="profileHeading">
        <i className="fa-solid fa-arrow-left" onClick={() => navigate("/home")}></i>
        <span>My Profile</span>
      </p>
      <CardForm initialName={userName} userEmail={userEmail} />
      <hr style={{ marginBottom: "1.5rem" }} />
      <CardList />
    </div>
  );
};

export default Profile;
