import React, { useState } from "react";

const BurgerMenu = ({ addToBasket, updateClickedBurgers }) => {
  const burgers = [
    { imgSrc: "./Group 25.png", name: "Royal Cheese Burger", price: "₹120" },
    { imgSrc: "./Group 26.png", name: "The classics for 3", price: "₹120" },
    { imgSrc: "./Group 27.png", name: "Chicken burger", price: "₹120" },
    { imgSrc: "./Group 28.png", name: "Cheeseburger", price: "₹120" },
  ];

  const [clickCounts, setClickCounts] = useState(burgers.map(() => 1));

  const handleImageClick = (index) => {
    const newClickCounts = [...clickCounts];
    newClickCounts[index] += 1;
    setClickCounts(newClickCounts);
  
    const clickedBurger = { ...burgers[index], clickCount: clickCounts[index] };
    addToBasket(clickedBurger);
    
    updateClickedBurgers((prev) => [...prev, burgers[index].name]);    
  };

  return (
    <div className="burgerSection">
      <h2>Burgers</h2>
      <div className="burgers">
        {burgers.map((burger, index) => (
          <div key={index} className="burger-menu">
            <img src={burger.imgSrc} alt={burger.name} onClick={() => handleImageClick(index)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BurgerMenu;
