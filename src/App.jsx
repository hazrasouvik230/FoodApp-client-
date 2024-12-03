import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Login from './pages/Login';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import Success from './pages/Success';
import 'leaflet/dist/leaflet.css';
import Address from './pages/Address';


const App = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState('');
  const [basketItems, setBasketItems] = useState([]);
  const [clickedBurgers, setClickedBurgers] = useState([]);
  const [clickedFries, setClickedFries] = useState([]);
  const [clickedDrinks, setClickedDrinks] = useState([]);

  const addToBasket = (item) => {
    setBasketItems((prevItems) => [...prevItems, item]);
  };

  const removeFromBasket = (index) => {
    const updatedBasket = [...basketItems];
    updatedBasket.splice(index, 1);
    setBasketItems(updatedBasket);
  };

  const calculateTotal = () => {
    let subtotal = basketItems.reduce((total, item) => total + parseInt(item.price.replace('₹', '')), 0);
    let discount = 3;
    let deliveryFee = 3;
    return subtotal - discount + deliveryFee;
  };

  return (
    <BrowserRouter>
      <Main
        isButtonVisible={isButtonVisible}
        setIsButtonVisible={setIsButtonVisible}
        selectedAddress={selectedAddress}
        setSelectedAddress={setSelectedAddress}
        basketItems={basketItems}
        addToBasket={addToBasket}
        removeFromBasket={removeFromBasket}
        total={calculateTotal()}
        clickedBurgers={clickedBurgers}
        updateClickedBurgers={setClickedBurgers}
        clickedFries={clickedFries}
        updateClickedFries={setClickedFries}
        clickedDrinks={clickedDrinks}
        updateClickedDrinks={setClickedDrinks}
      />
    </BrowserRouter>
  );
};

const Main = ({ 
  isButtonVisible, 
  setIsButtonVisible, 
  basketItems, 
  addToBasket, 
  removeFromBasket, 
  total, 
  clickedBurgers, 
  updateClickedBurgers,
  clickedFries,
  updateClickedFries,
  clickedDrinks,
  updateClickedDrinks, 
  selectedAddress,
  setSelectedAddress
}) => {
  const location = useLocation();
  const noNavbarPaths = ['/'];

  return (
    <>
      {!noNavbarPaths.includes(location.pathname) && <Navbar total={total} setIsButtonVisible={setIsButtonVisible} setSelectedAddress={setSelectedAddress} selectedAddress={selectedAddress} />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <Home
              basketItems={basketItems}
              addToBasket={addToBasket}
              removeFromBasket={removeFromBasket}
            />
          }
        />
        <Route
          path="/product"
          element={
            <Product
              isButtonVisible={isButtonVisible}
              setIsButtonVisible={setIsButtonVisible}
              basketItems={basketItems}
              addToBasket={addToBasket}
              removeFromBasket={removeFromBasket}
              clickedBurgers={clickedBurgers}
              updateClickedBurgers={updateClickedBurgers}
              clickedFries={clickedFries}
              updateClickedFries={updateClickedFries}
              clickedDrinks={clickedDrinks}
              updateClickedDrinks={updateClickedDrinks}
            />
          }
        />
        <Route path="/checkout" element={<Checkout total={total} clickedBurgers={clickedBurgers} clickedFries={clickedFries} clickedDrinks={clickedDrinks} setSelectedAddress={setSelectedAddress} selectedAddress={selectedAddress} />} />
        <Route path='/address' element={<Address setSelectedAddress={setSelectedAddress} />} />
        <Route path="/payment" element={<Payment total={total} />} />
        <Route path="/success" element={<Success clickedBurgers={clickedBurgers} clickedFries={clickedFries} clickedDrinks={clickedDrinks} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;