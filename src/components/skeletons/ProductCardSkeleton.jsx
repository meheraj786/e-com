import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="card shadow-sm p-3 rounded-[10px] w-full md:w-[295px] animate-pulse">
      <div className="mb-[16px] w-full h-[298px] bg-[#f0eeed] rounded-[20px]" />
      <div className="h-4 bg-gray-300 rounded w-[40%] mb-2" />
      <div className="h-5 bg-gray-400 rounded w-[70%] mb-2" />
      <div className="h-3 bg-gray-300 rounded w-[30%] mb-2" />
      <div className="h-5 bg-gray-400 rounded w-[50%] mb-3" />
      <div className="h-[40px] bg-gray-300 rounded-[20px] w-[120px] mx-auto md:mx-0" />
    </div>
  );
};

export default ProductCardSkeleton;
