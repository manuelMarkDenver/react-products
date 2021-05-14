import Header from './components/Header';
import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductsPage from './components/ProductsPage';
import Footer from './components/Footer';
import Slideshow from './components/Slideshow';

// import db from './db.json';

const App = () => {
  const [prodProducts, setProducts] = useState([]);
  const [prodIndex, setIndex] = useState();

  // Fetching products from localStorage
  useEffect(() => {
    const getProducts = () => {
      const productsFromLocalStorage = fetchProducts();
      setProducts(productsFromLocalStorage);
    };
    getProducts();
  }, []);

  // Add product
  const addProduct = (product, action, index) => {
    if (action === 'add') {
      console.log(prodIndex, action);
      const id = Math.floor(Math.random() * 10000 + 1);
      const newProduct = { id, ...product };
      const currArrProducts = fetchProducts();
      const arr = [...currArrProducts, newProduct];

      localStorage.setItem('products', JSON.stringify(arr));
      setProducts(arr);
    } else {
      const currArrProducts = fetchProducts();
      // let newArr = currArrProducts.splice(index, 1, product);

      const newArr = currArrProducts.map((item, itemIndex) => {
        if (itemIndex === index) {
          return product;
        } else {
          return item;
        }
      });
      localStorage.setItem('products', JSON.stringify(newArr));
      setProducts(newArr);
    }
  };

  // Fetch ALL products
  const fetchProducts = () => {
    const data = localStorage.getItem('products')
      ? JSON.parse(localStorage.getItem('products'))
      : [];
    return data;
  };

  // Delete product
  const deleteProduct = (id) => {
    const getProducts = fetchProducts();
    const filteredArr = getProducts.filter((prod) => prod.id !== id);
    localStorage.setItem('products', JSON.stringify(filteredArr));
    setProducts(filteredArr);
  };

  return (
    <Router>
      <div className="App relative">
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <Slideshow products={prodProducts} />
              <ProductList products={prodProducts} />
            </>
          )}
        />
        <Route
          path="/productspage/"
          render={(props) => (
            <ProductsPage
              products={prodProducts}
              onAdd={addProduct}
              onDelete={deleteProduct}
              props={props}
            />
          )}
        />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
