import React, {useState} from "react";

const ColdDrinksSection = ({addToBasket, updateClickedDrinks}) => {
    const drinks = [
        {imgSrc: './Group 37.png', name: 'Coke Coca Cola', price: '₹ 40'},
        {imgSrc: './Group 39.png', name: 'Thumps Up', price: '₹ 40'},
        {imgSrc: './Group 41.png', name: 'Pepsi', price: '₹ 40'},
        {imgSrc: './Group 38.png', name: 'Sprite', price: '₹ 40'},
    ];

    const [clickCounts, setClickCounts] = useState(drinks.map(() => 1));

    const handleImageClick = (index) => {
        const newClickCounts = [...clickCounts];
        newClickCounts[index] += 1;
        setClickCounts(newClickCounts);

        const clickedDrinks = { ...drinks[index], clickCount: clickCounts[index] };
        addToBasket(clickedDrinks);

        updateClickedDrinks((prev) => [...prev, drinks[index].name]);
    };

    return (
        <div className="drinksSection">
            <h2>Cold Drinks</h2>
            <div className="drinks">
                {drinks.map((drink, index) => (
                    <div key={index} className="drinks-menu">
                        <div>
                            <img src={drink.imgSrc} alt="" onClick={() => handleImageClick(index)} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ColdDrinksSection;