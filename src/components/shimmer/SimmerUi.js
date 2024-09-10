import React from 'react';

const ShimmerUi = () => {
  const Card = () => {
    return (
      <div className="bg-gray-300 rounded-xl p-4 w-64 h-64 animate-pulse">
        <div className="bg-gray-400 h-32 w-full rounded-t-md mb-4"></div>
        <div className="space-y-2">
          <div className="bg-gray-400 h-4 rounded w-3/4"></div>
          <div className="bg-gray-400 h-4 rounded w-2/4"></div>
          <div className="bg-gray-400 h-4 rounded w-1/4"></div>
          <div className="bg-gray-400 h-4 rounded w-1/2"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-wrap justify-center gap-5 py-8">
      {Array(18).fill("").map((_, index) => (
        <Card key={index} />
      ))}
    </div>
  );
};

export default ShimmerUi;
