import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LowerNavbar = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState();
  const [activeNav, setActiveNav] = useState("/home");

  useEffect(() => {
    const fullName = localStorage.getItem("userName");
    if (fullName) {
      setUserName(fullName.split(" ")[0]);
    }
  }, []);

  const handleNavClick = (path) => {
    setActiveNav(path);
    navigate(path);
  };

  return (
    <div className='lowerNavbar'>
      <div className='logo'>
        <img src="./LOGO 1.png" alt="logo" onClick={() => handleNavClick("/home")} />
      </div>

      <div className='content'>
        <p
          className={`navItems ${activeNav === "/home" ? "active" : ""}`}
          onClick={() => handleNavClick("/home")}
        >
          Home
        </p>
        <p className="navItems">
          Browse Menu
        </p>
        <p className="navItems">
          Special Offers
        </p>
        <p
          className={`navItems ${activeNav === "/product" ? "active" : ""}`}
          onClick={() => handleNavClick("/product")}
        >
          Restaurants
        </p>
        <p className="navItems">
          Track Order
        </p>
        <div
          className='loginCheck'
          onClick={() => {
            if (!userName) {
              navigate("/");
            } else {
              navigate("/profile");
            }
          }}
        >
          <img src="./Male User.png" alt="user" />
          <span>{userName ? `Hey ${userName}` : "Login/Signup"}</span>
        </div>
      </div>

      <div className='moreBtn'>
        <img src="./Menu.png" alt="" onClick={() => console.log('object')} />
      </div>
    </div>
  );
};

export default LowerNavbar;