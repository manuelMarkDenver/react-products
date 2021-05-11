import AddEditProductForm from './AddEditProductForm';
import ProductsTable from './ProductsTable';
import Button from './Button';

const ProductsPage = ({ products, onAdd, onDelete }) => {
  return (
    <div>
      <div className="text-center">
        <h3 className="text-3xl mb-10">Products Page</h3>

        <div className="w-full mx-auto">
          <Button
            text="Add Product"
            color="bg-green-500"
            addCss="mr-3"
          ></Button>
        </div>

        <AddEditProductForm onAdd={onAdd} />

        <ProductsTable products={products} onDelete={onDelete} />
      </div>
    </div>
  );
};

export default ProductsPage;
