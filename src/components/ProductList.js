import ProductCard from './ProductCard';

const ProductList = () => {
  return (
    <div className="container mx-auto mb-20">
      <h2 className="text-2xl text-center my-10">Products</h2>
      <div className="grid grid-cols-3 gap-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductList;
