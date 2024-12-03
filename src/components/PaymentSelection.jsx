import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaymentSelection = ({ total }) => {
  const navigate = useNavigate();

  const handleProceedPayment = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {
        toast.error("Login first to proceed to payment");
        return;
      }
  
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
  
      if (response.ok) {
        navigate("/success");
      } else {
        throw new Error("Payment failed");
      }
    } catch (error) {
      toast.error("Network issue, please try again");
    }
  };
  

  return (
    <div className="paymentSelection">
      <div className="paymentSelectionLeft">
        <div className="payOptions">
          <div className="payImage">
            <img src="./Icon.png" alt="" />
            <div className="payNames">
              <h3>Zeldapay</h3>
              <h5>Available balance: £183.43</h5>
            </div>
          </div>
          <img src="./ArrowRight.png" alt="" className="nextArrow" />
        </div>
        <center><hr /></center>
        <div className="payOptions">
          <div>
            <img src="./Social Icon.png" alt="" className="image1" />
            <span>MaestroKard</span>
          </div>
          <img src="./Radio (1).png" alt="" className="radios" />
        </div>
        <div className="payOptions">
          <div>
            <img src="./Social Icon (1).png" alt="" className="image1" />
            <span>Paypol</span>
          </div>
          <img src="./Radio (1).png" alt="" className="radios" />
        </div>
        <div className="payOptions">
          <div>
            <img src="./Social Icon (2).png" alt="" className="image1" />
            <span>Strike</span>
          </div>
          <img src="./Radio (1).png" alt="" className="radios" />
        </div>
        <div className="payOptions">+&nbsp;&nbsp; Add Debit Card</div>
      </div>

      <div className="paymentSelectionRight">
        <div className="amount">
          <p>Amount to be paid</p>
          <span>₹{(total + 10).toFixed(2)}</span>
        </div>
        <hr />
        <div className="proceedBtn" onClick={handleProceedPayment}>
          Proceed Payment
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default PaymentSelection;
