import React from 'react';
import Product from './Product';

const ProductsTable = ({ products, onDelete }) => {
  return (
    <div>
      <h2 className="mb-5 font-semibold">Products Table</h2>

      {products.length > 0 ? (
        <table className="table-auto border-collapse border border-green-800 max-w-7xl mx-auto mb-20">
          <thead>
            <tr>
              <th className="border border-green-600 px-5">Product ID</th>
              <th className="border border-green-600 px-5">Image</th>
              <th className="border border-green-600 px-5">Product Name</th>
              <th className="border border-green-600 px-5">Price</th>
              <th className="border border-green-600 px-5">Description</th>
              <th className="border border-green-600 px-5">Featured</th>
              <th className="border border-green-600 px-5">Edit</th>
              <th className="border border-green-600 px-5">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                desc={product.desc}
                img={product.img}
                featured={product.featured}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="max-w-xs bg-red-300 py-3 mb-10 mx-auto">
          No products yet
        </p>
      )}
    </div>
  );
};

export default ProductsTable;
