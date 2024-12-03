import React, { useState } from "react";

const reviews = [
  { imgSrc: "./Group 55.png" },
  { imgSrc: "./Group 55.png" },
  { imgSrc: "./Group 55.png" },
  { imgSrc: "./Group 55.png" },
  { imgSrc: "./Group 55.png" },
  { imgSrc: "./Group 55.png" },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("");

  const handleNext = () => {
    setDirection("next");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 500);
  };

  const handlePrev = () => {
    setDirection("prev");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex - 1 + reviews.length) % reviews.length
      );
    }, 500);
  };

  return (
    <div className="reviews-slider">
      <div className="reviewSliderHeader">
        <h2>Customer Reviews</h2>
        <div className="handleBtn">
          <span onClick={handlePrev}>
            <i className="fa-solid fa-arrow-left"></i>
          </span>
          <span onClick={handleNext} style={{marginLeft: '.5rem'}}>
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </div>
      </div>
      <div className={`reviews-container ${direction}`}>
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`review-card ${
              index === currentIndex
                ? "active"
                : index === (currentIndex - 1 + reviews.length) % reviews.length ||
                  index === (currentIndex + 1) % reviews.length
                ? "inactive"
                : ""
            }`}
          >
            <img src={review.imgSrc} alt={`Review ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="handleBtndown">
          <span onClick={handlePrev}>
            <i className="fa-solid fa-arrow-left"></i>
          </span>
          <span onClick={handleNext} style={{marginLeft: '.5rem'}}>
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </div>
    </div>
  );
};

export default Reviews;
