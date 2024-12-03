import React from "react";
import {useNavigate} from 'react-router-dom'

const PopularRestaurants = () => {
  const restaurants = [
    { logo: "./Group 16.png" },
    { logo: "./Group 17.png" },
    { logo: "./Group 18.png" },
    { logo: "./Group 19.png" },
    { logo: "./Group 20.png" },
    { logo: "./Group 21.png" },
  ];

  const navigate = useNavigate();

  return (
    <section className="popular-restaurants">
      <h2>Popular Restaurants</h2>
      <div className="restaurants-container">
        {restaurants.map((restaurant, index) => (
          <div className="restaurant-card" key={index}>
            <img src={restaurant.logo} alt="" onClick={() => navigate("/product")} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularRestaurants;

