import React from 'react';
import { useNavigate } from 'react-router-dom';

const Success = ({ clickedBurgers, clickedFries, clickedDrinks }) => {
    const navigate = useNavigate();

    return (
        <div className="success">
            <img src="./Content.png" alt="Success" />
            <div className="orders">
                <p>
                    {clickedBurgers.length > 0 || clickedFries.length > 0 || clickedDrinks.length > 0 ? (
                        <>
                            {clickedBurgers.map((burger, index) => (
                                <span key={`burger-${index}`} className="itemNames">
                                    {burger}
                                </span>
                            ))}
                            {clickedFries.map((fries, index) => (
                                <span key={`fries-${index}`} className="itemNames">
                                    {fries}
                                </span>
                            ))}
                            {clickedDrinks.map((drink, index) => (
                                <span key={`drink-${index}`} className="itemNames">
                                    {drink}
                                </span>
                            ))}
                        </>
                    ) : (
                        <span>No items clicked.</span>
                    )}
                </p>
                <h5 className="homeBackBtn" onClick={() => navigate("/home")}>
                    Back to Home
                </h5>
            </div>
        </div>
    );
};

export default Success;
