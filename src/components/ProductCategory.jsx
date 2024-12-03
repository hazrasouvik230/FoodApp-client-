import React from 'react';
import ProductOffers from '../components/ProductOffer';
import BurgerMenu from './BurgerMenu';
import FriesSection from './FriesSection';
import ColdDrinksSection from './ColdDrinksSection';

const ProductCategory = ({ addToBasket, updateClickedBurgers, updateClickedFries, updateClickedDrinks }) => {
  return (
    <div>
      <ProductOffers />
      <BurgerMenu addToBasket={addToBasket} updateClickedBurgers={updateClickedBurgers} />
      <FriesSection addToBasket={addToBasket} updateClickedFries={updateClickedFries} />
      <ColdDrinksSection addToBasket={addToBasket} updateClickedDrinks={updateClickedDrinks} />
    </div>
  );
};

export default ProductCategory;