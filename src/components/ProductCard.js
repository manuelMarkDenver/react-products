import React from 'react';

const ProductCard = ({ id, name, price, desc, img }) => {
  return (
    <div className="border border-gray-300 rounded-xl flex flex-col shadow-lg max-w-lg items-center justify-between">
      <div className=" flex-1 w-20 flex items-center justify-center py-5">
        <img src={img} alt="" className="max-w-xs" />
      </div>
      <div className="px-10 w-full">
        <div className="px-10 py-5 w-full">
          <div className="flex items-center justify-between">
            <span>Product ID</span>
            <p className="text-gray-400">{id}</p>
          </div>
          <div className="flex items-start justify-between">
            <span>Name</span>
            <h3>{name}</h3>
          </div>
          <div className="flex items-start justify-between mb-5">
            <span>Price</span>
            <p>{price}</p>
          </div>

          <div className="flex flex-col justify-between">
            <span className="italic">Product Description:</span>
            <p className="px-3">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
