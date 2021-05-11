import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <div className="container mx-auto mb-20">
      <h2 className="text-2xl text-center my-10">Products</h2>
      {products.length > 0 ? (
        <div className="grid grid-cols-3 gap-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              desc={product.desc}
              img={product.img}
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
