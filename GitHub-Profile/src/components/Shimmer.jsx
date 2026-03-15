import React from "react";
import ShimmerCard from "./ShimmerCard";


const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {Array(6)
        .fill("")
        .map((_, index) => (
          <ShimmerCard  key={index} />
        ))}
    </div>
  );
};

export default Shimmer;