import React from 'react'
import ExclusiveDeals from '../components/ExclusiveDeals';
import PopularCategories from '../components/PopularCategories';
import PopularRestaurants from '../components/PopularRestaurants';
import Ordering from '../components/Ordering';
import KnowMore from '../components/KnowMore';
import Peoples from '../components/Peoples';

const Home = () => {
  return (
    <div className="search-box">
      <div className="search-content">
        <div className="text-section">
          <p>Order Restaurant food, takeaway and groceries.</p>
          <h1>
            Feast Your Senses, <br /><span>Fast and Fresh</span>
          </h1>
          <p className='postcode'>Enter a postcode to see what we deliver</p>
          <div className="input-container">
            <input type="text" placeholder="e.g. EC4R 3TE" />
            <span>Search</span>
          </div>
        </div>
        <div className="image-section">
          <img src="./Home-Banner.png" alt="Food Banner" />
        </div>
      </div>
        <ExclusiveDeals />
        <PopularCategories />
        <PopularRestaurants />
        <Ordering />
        <KnowMore />
        <Peoples />
    </div>
  );
}

export default Home