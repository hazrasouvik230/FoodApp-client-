import React from 'react';

const Ordering = () => {
  return (
    <div className="ordering">
      <img className="desktop-only" src="./Ordering APP.png" alt="Ordering App" />
      <img className="mobile-only" src="./ResponsiveOrder.png" alt="Responsive Order" style={{ borderRadius: '12px' }} />
      <div className="partner">
        <img src="./PartnerLeft.png" alt="Partner Left" />
        <img src="./RideRight.png" alt="Ride Right" />
      </div>
    </div>
  );
};

export default Ordering;
