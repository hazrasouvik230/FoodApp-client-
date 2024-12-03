import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Basket = ({ basketItems, removeFromBasket }) => {
    const navigate = useNavigate();

    const calculateTotal = () => {
        let subtotal = basketItems.reduce((total, item) => total + parseInt(item.price.replace('₹', '')), 0);
        let discount = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
        let deliveryFee = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
        let total = subtotal - discount + deliveryFee;
        return { subtotal, discount, deliveryFee, total };
    };

    const { subtotal, discount, deliveryFee, total } = calculateTotal();

    const now = new Date();
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();

    const isDeliveryFeeSufficient = deliveryFee >= 20;
    const isTimeValid = currentHours > 18 || (currentHours === 18 && currentMinutes >= 0);
    const isCheckoutAccessible = isDeliveryFeeSufficient && isTimeValid;

    const remainingFee = 20 - deliveryFee;

    let message = "";
    if (!isDeliveryFeeSufficient) {
        message = `Minimum delivery is ₹20. You must spend ₹${remainingFee} more for the checkout!`;
    } else if (!isTimeValid) {
        message =
            "We are open now, but delivery starts at 18:00. However, you may order and collect in store now.";
    }

    return (
        <div className="basket-container">
            <img src="./Frame 96 (1).png" alt="" className='sharingLink' onClick={() => {
                    console.log('clicked')
                    const shareLink = `${window.location.origin}/product`;
                    navigator.clipboard.writeText(shareLink).then(() => {
                        toast.success('Link copied to clipboard! Share it to redirect to the product page.');
                    });
                }} />
            <div className="basket-header">
                <img src="./Full Shopping Basket.png" alt="" />
                <h2>My Basket</h2>
            </div>
            <div className="basket-items">
                {basketItems.map((item, index) => (
                    <div key={index} className="basket-item">
                        <div className='food-item'>
                            <div className='counter'>{item.clickCount}x</div>
                            <div>
                                <div className='price'>{item.price}</div>
                                <div className='name'>{item.name}</div>
                            </div>
                        </div>

                        <div className="remove-item">
                            <img src="./Remove.png" alt="" onClick={() => removeFromBasket(index)} className="remove-item" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="basket-summary">
                <div>
                    <span className='points'>Sub Total:</span>
                    <span>₹{subtotal}</span>
                </div>
                <div>
                    <span className='points'>Discounts:</span>
                    <span>₹-{discount}</span>
                </div>
                <div>
                    <span className='points'>Delivery Fee:</span>
                    <span>₹{deliveryFee}</span>
                </div>
            </div>
            <div className="total-to-pay">
                <div className='pay'>
                    <span className='header'>Total to pay:</span>
                    <span className='a'>₹{total}.00</span>
                </div>
                <div className='choose'>
                    <span>Choose your free item...</span>
                    <img src="./Forward Button.png" alt="" />
                </div>
                <div className='apply'>
                    <span>Apply Coupon Code here</span>
                    <img src="./Forward Button (1).png" alt="" />
                </div>
            </div>

            <div className="times">
                <div className='delivery'>
                    <img src="./Delivery Scooter.png" alt="" />
                    <span className='statement1'>Delivery</span>
                    <span className='statement2'>Starts at 17:50</span>
                </div>
                <div className='collections'>
                    <img src="./New Store.png" alt="" />
                    <span className='statement1'>Collection</span>
                    <span className='statement2'>Starts at 16:50</span>
                </div>
            </div>

            <div
                className='checkBtn'
                onClick={() => {
                    if (isCheckoutAccessible) {
                        navigate("/checkout");
                    }
                }}
                style={{
                    backgroundColor: isCheckoutAccessible ? 'rgba(2, 134, 67, 1)' : 'rgba(255, 177, 177, 1)',
                    cursor: isCheckoutAccessible ? 'pointer' : 'not-allowed',
                }}
                title={message}
            >
                <img src="./Forward Button (2).png" alt="" />
                <span className="checkout-button">Checkout!</span>
                <img src="./Forward Button (1).png" alt="" style={{ opacity: 0 }} />
            </div>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        </div>
    );
};

export default Basket;