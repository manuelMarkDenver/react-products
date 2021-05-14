import ProductCard from './ProductCard';

const ProductList = ({ products, singleProduct }) => {
  // const newArr = products.sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div className="container mx-auto mb-20">
      <h2 className="text-2xl text-center my-10">Products</h2>
      {products.length > 0 ? (
        <div className="grid grid-cols-3 gap-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.prodName}
              price={product.prodPrice}
              desc={product.prodDesc}
              img={product.prodImg}
            />
          ))}
        </div>
      ) : (
        <p className="text-center">No products yet</p>
      )}
    </div>
  );
};

export default ProductList;
