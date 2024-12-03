import React from 'react';
import UpperNavbar from './UpperNavbar';
import LowerNavbar from './LowerNavbar';
import ResponsiveNav from './ResponsiveNav';

const Navbar = ({ total, setIsButtonVisible, setSelectedAddress, selectedAddress }) => {
  return (
    <div className="wholeNavbar">
      <ResponsiveNav setSelectedAddress={setSelectedAddress} selectedAddress={selectedAddress} />
      <UpperNavbar total={total} setIsButtonVisible={setIsButtonVisible} setSelectedAddress={setSelectedAddress} selectedAddress={selectedAddress} />
      <LowerNavbar />
    </div>
  );
};

export default Navbar;
