import React from "react";

const offers = [
    {imgSrc: './Group 23.png'},
    {imgSrc: './Group 43.png'},
    {imgSrc: './Group 44.png'},
];

const ProductOffers = () => {
    return (
        <div className="offers">
            {offers.map((offer, index) => (
                <div key={index} className="offer-card">
                    <div>
                        <img src={offer.imgSrc} alt="" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductOffers;
