import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const UpperNavbar = ({ total, setIsButtonVisible, selectedAddress }) => {
  const [userName, setUserName] = useState();

  const navigate = useNavigate();
  
  useEffect(() => {
    const fullName = localStorage.getItem("userName");
    if (fullName) {
      setUserName(fullName.split(" ")[0]);
    }
  }, []);

  const userAddress = (address) => {
    if (address && address.length > 25) {
      return address.slice(0, 25) + "...";
    }
    return address;
  };

  return (
    <div className="upperNavbar">
      <div className="leftPart">
        <img src="./Star.png" alt="" />
        <p>
          Get 5% Off your first order, <span>Promo: ORDER5</span>
        </p>
      </div>
      
      <div className='upperLoginCheck' onClick={() => {
          if (!userName) {
            navigate("/");
          } else {
            navigate("/profile");
          }
        }}
      >
        <img src="./Ellipse 9.png" alt="user" />
        <span>{userName ? `Hey ${userName}` : "Login/Signup"}</span>
      </div>
      
      <div className="rightPart">
        <div className="address">
          <i className="fa-solid fa-location-dot"></i>
          <p>{userAddress(selectedAddress) || 'Address'}</p>
          <p className="changeLoc" onClick={() => navigate("/address")}>Change Location</p>
        </div>
        <div className="cart" onClick={() => setIsButtonVisible(true)}>
          <div className="cartLeft">
            <img src="./Full Shopping Basket.png" alt="" />
            <p>My Cart</p>
          </div>
          <div className="cartMiddle">
            ₹ : {total.toFixed(2)}
          </div>
          <div className="cartRight">
            <button>
              <i className="fa-solid fa-arrow-down"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperNavbar;
