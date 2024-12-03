import React, {useState} from "react";

const FriesSection = ({addToBasket, updateClickedFries}) => {
    const frieses = [
        {imgSrc: './Group 31.png', name: 'Royal Cheese Fries', price: '₹ 70'},
        {imgSrc: './Group 33.png', name: 'Potato wedges', price: '₹ 70'},
        {imgSrc: './Group 35.png', name: 'Shoestring fries', price: '₹ 70'},
        {imgSrc: './Group 32.png', name: 'Curly fries', price: '₹ 70'},
    ];

    const [clickCounts, setClickCounts] = useState(frieses.map(() => 1));

    const handleImageClick = (index) => {
        const newClickCounts = [...clickCounts];
        newClickCounts[index] += 1;
        setClickCounts(newClickCounts);

        const clickedFries = { ...frieses[index], clickCount: clickCounts[index] };
        addToBasket(clickedFries);

        updateClickedFries((prev) => [...prev, frieses[index].name]);
    };

    return (
        <div className="friesSection">
            <h2>Fries</h2>
            <div className="fries">
                {frieses.map((fries, index) => (
                    <div key={index} className="fries-menu">
                        <img src={fries.imgSrc} alt="" onClick={() => handleImageClick(index)} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FriesSection;