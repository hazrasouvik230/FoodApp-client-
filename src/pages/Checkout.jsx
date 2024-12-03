import React from 'react';
import { useNavigate } from 'react-router-dom';
import PopularRestaurants from '../components/PopularRestaurants';
import OrderDetails from '../components/OrderDetails';

const Checkout = ({ total, clickedBurgers, clickedFries, clickedDrinks, setSelectedAddress, selectedAddress }) => {
    const navigate = useNavigate();

    return (
        <div className='checkout'>
            <div className='orderDetails'>
                <i className="fa-solid fa-arrow-left" onClick={() => navigate("/product")}></i>
                <span>Your Order Details</span>
            </div>

            <div>
                <OrderDetails
                    total={total}
                    clickedBurgers={clickedBurgers}
                    clickedFries={clickedFries}
                    clickedDrinks={clickedDrinks}
                    setSelectedAddress={setSelectedAddress}
                    selectedAddress={selectedAddress}
                />
            </div>
            <PopularRestaurants />
        </div>
    );
};

export default Checkout;
