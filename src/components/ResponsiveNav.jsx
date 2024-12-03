import React from 'react'

const ResponsiveNav = ({setIsButtonVisible, selectedAddress}) => {
    const userAddress = (address) => {
        if (address && address.length > 25) {
          return address.slice(0, 25) + "...";
        }
        return address;
      };

  return (
    <div className='responsiveNav'>
        <div className="address">
          <i className="fa-solid fa-location-dot"></i>
          <p>{userAddress(selectedAddress) || 'Address'}</p>
        </div>
    </div>
  )
}

export default ResponsiveNav