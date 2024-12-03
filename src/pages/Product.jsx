import React, { useState, useEffect } from "react";
import Delivery from "../components/Delivery";
import Map from "../components/Map";
import Reviews from "../components/Reviews";
import PopularRestaurants from "../components/PopularRestaurants";
import ProductCategory from "../components/ProductCategory";
import Basket from "../components/Basket";

const Product = ({
  isButtonVisible,
  setIsButtonVisible,
  basketItems,
  addToBasket,
  removeFromBasket,
  clickedBurgers,
  updateClickedBurgers,
  clickedFries,
  updateClickedFries,
  clickedDrinks,
  updateClickedDrinks,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="product">
      {/* Product Header */}
      <div className="productHeader">
        <img
          src="./ProductBanner.png"
          alt="Product Banner"
          className="fullScreenImage"
        />
        <img
          src="./ResponsiveProduct.png"
          alt="Product Banner"
          style={{ borderRadius: "12px" }}
          className="notFullScreenImage"
        />
      </div>

      {/* Product Navigation */}
      <div className="productNavbar">
        <div className="productUpperNavbar">
          <div>All Offers from McDonald’s East London</div>
          <div className="productUpperNavbarSearch">
            <span>
              <i className="fa-solid fa-search"></i>
            </span>{" "}
            Search from menu...
          </div>
        </div>
        <div className="productLowerNavbar">
          <h4 className="offer">Offers</h4>
          <h4>Burgers</h4>
          <h4>Fries</h4>
          <h4>Snacks</h4>
          <h4>Salads</h4>
          <h4>Cold drinks</h4>
          <h4>Happy Meal®</h4>
          <h4>Desserts</h4>
          <h4>Hot drinks</h4>
          <h4>Sauces</h4>
          <h4>Orbit®</h4>
        </div>
      </div>

      <div className={`checkBoxRender ${isButtonVisible ? "buttonVisible" : ""}`}>
        <div className="productCategory">
          <ProductCategory
            addToBasket={addToBasket}
            updateClickedBurgers={updateClickedBurgers}
            updateClickedFries={updateClickedFries}
            updateClickedDrinks={updateClickedDrinks}
          />
        </div>

        {isMobile && isButtonVisible ? (
          <div className="basketOverlay">
            <Basket
              basketItems={basketItems}
              removeFromBasket={removeFromBasket}
            />
          </div>
        ) : (
          isButtonVisible && (
            <div className="productCategoryRight">
              <Basket
                basketItems={basketItems}
                removeFromBasket={removeFromBasket}
              />
            </div>
          )
        )}
      </div>

      <Delivery />
      <Map />
      <Reviews />
      <PopularRestaurants />
    </div>
  );
};

export default Product;