import React from 'react';

const ProductCard = () => {
  return (
    <div className="border border-gray-300 rounded-lg flex flex-col items-center ">
      <img
        src="https://picsum.photos/1200"
        alt=""
        className="w-full h-auto mb-5"
      />
      <div className="px-10 py-5 w-full">
        <div className="flex items-start justify-between">
          <h3>Prod Name</h3>
          <p>Price</p>
        </div>
        <p>Description</p>
        <div className="flex flex-row justify-between">
          <span>Featured</span>
          <input type="checkbox" value="Featured" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
