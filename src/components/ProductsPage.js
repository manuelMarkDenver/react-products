import AddEditProductForm from './AddEditProductForm';
import ProductsTable from './ProductsTable';

const ProductsPage = ({ products, onAdd }) => {
  return (
    <div>
      <div className="text-center">
        <h3 className="text-3xl mb-10">Products Page</h3>

        <button className="py-3 px-3 bg-green-500 rounded-lg mb-5">
          Add Product
        </button>

        <AddEditProductForm onAdd={onAdd} />

        <ProductsTable products={products} />
      </div>
    </div>
  );
};

export default ProductsPage;
