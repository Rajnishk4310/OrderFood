import React from 'react';
import './ShimmerUi.css'; // Import the CSS for the shimmer effect

const ShimmerUi = () => {
  const Card = () => {
    return (
      <div className="card shimmer-card">
        <div className="shimmer-img"></div>
        <div className="card-contents shimmer-contents">
          <div className="shimmer-line"></div>
          <div className="shimmer-line"></div>
          <div className="shimmer-line"></div>
          <div className="shimmer-line"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="card-items shimmer-wrapper">
      {Array(18).fill("").map((_, index) => (
        <Card key={index} />
      ))}
    </div>
  );
};

export default ShimmerUi;
