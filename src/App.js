import Header from './components/Header';
import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Showcase from './components/Showcase';
import ProductList from './components/ProductList';
import ProductsPage from './components/ProductsPage';
import Footer from './components/Footer';
// import db from './db.json';

const App = () => {
  const [products, setProducts] = useState([]);

  // Fetching products from localStorage
  useEffect(() => {
    const getProducts = async () => {
      const productsFromLocalStorage = await fetchProducts();
      setProducts(productsFromLocalStorage);
    };
    getProducts();
  }, []);

  // Fetch products
  const fetchProducts = () => {
    const data = localStorage.getItem('products')
      ? JSON.parse(localStorage.getItem('products'))
      : [];
    return data;
  };

  // Add product
  const addProduct = (product) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newProduct = { id, ...product };
    const currArrProducts = fetchProducts();
    const arr = [...currArrProducts, newProduct];

    localStorage.setItem('products', JSON.stringify(arr));

    setProducts(arr);
  };

  // Delete product

  const deleteProduct = (id) => {
    const getProducts = fetchProducts();
    const filteredArr = getProducts.filter((prod) => prod.id !== id);
    localStorage.setItem('products', JSON.stringify(filteredArr));
    setProducts(filteredArr);
  };

  // Delete all products
  const deleteAllProducts = () => {
    localStorage.removeItem('products');
    alert('All products deleted');
    setProducts(fetchProducts());
  };

  return (
    <Router>
      <div className="App ">
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <Showcase />
              <ProductList products={products} />
            </>
          )}
        />
        <Route
          path="/productspage"
          render={(props) => (
            <ProductsPage
              products={products}
              onAdd={addProduct}
              onDelete={deleteProduct}
              onDeleteAll={deleteAllProducts}
            />
          )}
        />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
