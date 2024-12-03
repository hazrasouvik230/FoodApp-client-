import React from "react";

const PopularCategories = () => {
  const categories = [
    { name: "Burgers & Fast Food", count: 21, image: "./Rectangle 13.png" },
    { name: "Salads", count: 32, image: "./Rectangle 15.png" },
    { name: "Pasta & Casuals", count: 4, image: "./Rectangle 17.png" },
    { name: "Pizza", count: 52, image: "./Rectangle 19.png" },
    { name: "Breakfast", count: 4, image: "./Rectangle 21.png" },
    { name: "Soups", count: 32, image: "./Rectangle 23.png" },
  ];

  return (
    <section className="popular-categories">
      <h2>Order.uk Popular Categories 🤩</h2>
      <div className="categories-container">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
            <p>{category.count} Restaurants</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
