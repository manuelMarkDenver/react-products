import React from 'react';
import Product from './Product';

const ProductsTable = ({ products }) => {
  return (
    <div>
      <h2 className="mb-5 font-semibold">Products Table</h2>

      {products !== null ? (
        <table className="table-fixed border-collapse border border-green-800 max-w-7xl mx-auto mb-20">
          <thead>
            <tr>
              <th className="border border-green-600 w-1/12">Product ID</th>
              <th className="border border-green-600 w-2/12">Image</th>
              <th className="border border-green-600 w-2/12">Product Name</th>
              <th className="border border-green-600 w-4/12">Description</th>
              <th className="border border-green-600 w-1/12">Featured</th>
              <th className="border border-green-600 w-1/12">Edit</th>
              <th className="border border-green-600 w-1/12">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                desc={product.desc}
                img={product.img}
                featured={product.featured}
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
