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

  useEffect(() => {
    const fetchTasks = () => {
      const arr = localStorage.getItem('products');
      setProducts(JSON.parse(arr));
    };
    fetchTasks();
  }, []);

  // Fetch Products

  // Add product
  const addProduct = (product) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newProduct = { id, ...product };
    const currArrProducts = localStorage.getItem('products')
      ? JSON.parse(localStorage.getItem('products'))
      : [];
    const arr = [...currArrProducts, newProduct];

    localStorage.setItem('products', JSON.stringify(arr));

    setProducts(arr);
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
              <ProductList />
            </>
          )}
        />
        <Route
          path="/productspage"
          render={(props) => (
            <ProductsPage products={products} onAdd={addProduct} />
          )}
        />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
