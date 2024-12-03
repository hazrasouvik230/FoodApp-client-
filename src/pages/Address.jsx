import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Address = ({setSelectedAddress}) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [addresses, setAddresses] = useState([]);

  const userName = localStorage.getItem("userName") || "";

  const navigate = useNavigate();

  const handleImageClick = () => {
    setIsFormVisible(true);
  };

  const handleSave = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newAddress = {
      state: formData.get('state'),
      city: formData.get('city'),
      zip: formData.get('zip'),
      phoneNo: formData.get('phoneNo'),
      fullAddress: formData.get('fullAddress'),
    };
    setAddresses((prevAddresses) => [...prevAddresses, newAddress]);
    setSelectedAddress(newAddress.fullAddress);
    setIsFormVisible(false);
  };

  const handleSelectAddress = (index) => {
    const selected = addresses[index];
    setSelectedAddress(selected.fullAddress);
    console.log('Goo to checkout')
    navigate('/checkout');
  };

  const handleEdit = (index) => {
    const addressToEdit = addresses[index];
    setIsFormVisible(true);
    setAddresses((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRemove = (index) => {
    setAddresses((prevAddresses) => prevAddresses.filter((_, i) => i !== index));
  };

  return (
    <div className="addressDetailsPage">
        <div className='addressDetailsHeader'>
            <i className="fa-solid fa-arrow-left" onClick={() => navigate("/checkout")}></i>
            <span>Your Addresses</span>
        </div>

        <div className='addressPage'>
            <img src="./Frame 118.png" alt="Add Address" onClick={handleImageClick} />

            {isFormVisible && (
            <div className="overlay">
                <form onSubmit={handleSave}>
                    <div className='image'>
                        Address
                    </div>

                    <div className="row2">
                        <input type="text" name="state" required placeholder="State" />
                        <input type="text" name="city" required placeholder="City / District" />
                        <input type="text" name="zip" required placeholder="Pincode" />
                        <input type="text" name="phoneNo" required placeholder="Phone Number" />
                    </div>

                    <div className="row3">
                        <input name="fullAddress" placeholder="Enter full address"></input>
                    </div>

                    <div className="addressBtn">
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
            )}

            {addresses.map((address, index) => (
            <div className="addressDetails" key={index} onClick={() => handleSelectAddress(index)}>
                <div>
                    <h3>{userName}</h3>
                    <p>{address.fullAddress}</p>
                    <p>Phone Number: {address.phoneNo}</p>
                </div>

                <div className="update">
                    <p onClick={() => handleEdit(index)}>Edit</p>
                    <hr />
                    <p onClick={() => handleRemove(index)}>Remove</p>
                </div>
            </div>
            ))}
        </div>
    </div>
  );
};

export default Address;
