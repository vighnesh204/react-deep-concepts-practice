import React from "react";

const ShimmerCard = () => {
  return (
    <div className="bg-white w-72 p-5 rounded-lg shadow animate-pulse flex flex-col items-center">
      
      {/* Avatar */}
      <div className="w-16 h-16 bg-gray-300 rounded-full"></div>

      {/* Username */}
      <div className="mt-4 w-24 h-4 bg-gray-300 rounded"></div>

      {/* URL */}
      <div className="mt-2 w-40 h-3 bg-gray-300 rounded"></div>

      {/* Button */}
      <div className="mt-4 w-24 h-8 bg-gray-300 rounded-md"></div>
    </div>
  );
};

export default ShimmerCard;