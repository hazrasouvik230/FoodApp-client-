import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OrderDetails = ({ total, clickedBurgers, clickedFries, clickedDrinks, selectedAddress }) => {
    const navigate = useNavigate();

    const allClickedItems = [
        ...clickedBurgers.map(item => ({ name: item, price: '₹120', type: 'burger' })),
        ...clickedFries.map(item => ({ name: item, price: '₹70', type: 'fries' })),
        ...clickedDrinks.map(item => ({ name: item, price: '₹40', type: 'colddrink' }))
    ];

    const totalItemCount = clickedBurgers.length + clickedFries.length + clickedDrinks.length;

    const userAddress = (address) => {
        if (address && address.length > 25) {
            return address.slice(0, 25) + "...";
        }
        return address;
    };

    const isAddressSelected = selectedAddress && selectedAddress.length > 0;

    const showAddressToast = () => {
        toast.error("Please select your address");
    };

    const handleProceedClick = () => {
        if (!isAddressSelected) {
            showAddressToast();
        } else {
            navigate("/payment");
        }
    };

    return (
        <div className='order-details'>
            <div className="paymentSelectionLeft">
                <>
                    {allClickedItems.map((item, index) => (
                        <div className='itemContainer' key={index}>
                            <div className='itemSection'>
                                <img
                                    src={
                                        item.type === 'burger'
                                            ? './Rectangle 11.png'
                                            : item.type === 'fries'
                                            ? './Rectangle 11 (1).png'
                                            : './Rectangle 11 (2).png'
                                    }
                                    alt={item.type}
                                    style={{ width: '40px', marginRight: '10px' }}
                                />
                                <div className='itemName'>
                                    {item.name}
                                    <span>1x item</span>
                                </div>
                            </div>
                            <div className='itemPrice'>
                                {item.price}
                            </div>
                        </div>
                    ))}
                </>

                <div style={{marginTop: '1rem'}}>Notes</div>
                <div className='notes'>
                    Add order notes
                </div>
            </div>

            <div className="paymentSelectionRight">
                <div className="address" onClick={() => navigate("/address")}>
                    <div className="addDetails">
                        <img src="./Icon (1).png" alt="" />
                        <div className="payNames">
                            <h3>Delivery Address</h3>
                            <h5>{userAddress(selectedAddress) || ''}</h5>
                        </div>
                    </div>
                    <img src="./ArrowRight.png" alt="" className="nextArrow" />
                </div>

                <div className="calculations">
                    <div>
                        <span>Items</span>
                        <h3>₹{total.toFixed(2)}</h3>
                    </div>
                    <div>
                        <span>Sales Tax</span>
                        <h3>₹10</h3>
                    </div>
                </div>

                <div className="total">
                    <span>Subtotal ({totalItemCount} items)</span>
                    <h3>₹{(total + 10).toFixed(2)}</h3>
                </div>

                <div 
                    className={`proceedBtn ${!isAddressSelected ? 'disabled' : ''}`} 
                    onClick={handleProceedClick}
                >
                    Choose Payment Method
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        </div>
    );
};

export default OrderDetails;
