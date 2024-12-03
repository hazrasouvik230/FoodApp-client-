import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPasswordPopup from "../components/ForgotPasswordPopup";
import { baseUrl } from "../URL";

const Login = () => {
  const [state, setState] = useState("Signup");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = state === "Signup" ? { name, phone, email, password } : { email, password };
    const endpoint = state === "Signup" ? "signup" : "signin";

    if (state === "Signup" && (!name || !phone || !email || !password)) {
      toast.error("Please fill all fields.");
      return;
    }

    if (state === "Signin" && (!email || !password)) {
      toast.error("Please fill all fields.");
      return;
    }

    axios
      .post(`${baseUrl}/api/user/${endpoint}`, data)
      .then((result) => {
        if (state === "Signup") {
          toast.success("User created successfully!");
          setName("");
          setEmail("");
          setPassword("");
          setState("Signin");
        } else {
          toast.success("User login successfully!");
          localStorage.setItem("authToken", result.data.token);
          localStorage.setItem("userName", result.data.name);
          localStorage.setItem("userEmail", result.data.email);
          navigate("/home");
        }
        console.log("Backend Response:", result.data);
      })
      .catch((error) => {
        const errorMessage = error.response?.data?.message || "Something went wrong!";
        toast.error(errorMessage);
      });
  };

  return (
    <div className="login">
      <div className="login-left">
        <form className="form-container" onSubmit={handleSubmit}>
          <center>
            <img src="./LOGO 1.png" alt="Logo" />
          </center>
          <h2 className="heading1">{state === "Signin" ? "Welcome Back 👋" : "Welcome 👋"}</h2>
          <p className="para1">
            Today is a new day. It's your day. You shape it. {state === "Signup" ? "Sign up" : "Sign in"} to start ordering.
          </p>
          {state === "Signup" && (
            <div>
              <label htmlFor="name">Name</label>
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          {state === "Signup" && (
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input
                className="input"
                type="number"
                name="phone"
                placeholder="Enter your 10 digit mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          )}
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              placeholder="At least 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {state === "Signin" && (
            <p className="para2" onClick={() => setShowForgotPassword(true)}>
              Forgot Password?
            </p>
          )}
          <button className="loginBtn" type="submit">
            {state === "Signup" ? "Continue" : "Sign in"}
          </button>
          <p className="para3">
            {state === "Signup" ? "Already have an account? " : "Don't have an account? "}
            <span
              className="stateChange"
              onClick={() => setState(state === "Signup" ? "Signin" : "Signup")}
            >
              {state === "Signup" ? "Sign in" : "Sign up"}
            </span>
          </p>
        </form>
      </div>

      <div className="login-image">
        <img src="./Art.png" alt="Artwork" />
      </div>

      {showForgotPassword && (
        <ForgotPasswordPopup email={email} onClose={() => setShowForgotPassword(false)} style={{height: '100%', width: '100%', background: 'pink'}} />
      )}

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
};

export default Login;
