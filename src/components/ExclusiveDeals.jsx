import React from "react";

const ExclusiveDeals = () => {
  const deals = [
    { name: "Chef Burgers London", discount: "-40%", image: "./Group 10.png" },
    { name: "Grand Ai Cafe London", discount: "-20%", image: "./Group 11.png" },
    { name: "Butterbrot Café London", discount: "-17%", image: "./Group 12 (1).png" },
  ];

  return (
    <section className="exclusive-deals">
      <div className="header">
        <h2>Up to -40% 🎊 Order.uk exclusive deals</h2>
        <div className="options">
          <p>Vegan</p>
          <p>Sushi</p>
          <p className="pizza">Pizza & Fast Food</p>
          <p>others</p>
        </div>
        <div className="activeMenu">
          <img src="./Next page.png" alt="" /> Pizza & Fast Food
        </div>
      </div>
      <div className="deals-container">
        {deals.map((deal, index) => (
          <div className="deal-card" key={index}>
            <img src={deal.image} alt={deal.name} className="deal-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExclusiveDeals;

