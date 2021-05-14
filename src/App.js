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
  const [slideImages, setSlideImages] = useState([]);
  const [prodIndex, setIndex] = useState();

  // Fetching products from localStorage
  useEffect(() => {
    const getProducts = async () => {
      const productsFromLocalStorage = await fetchProducts();
      setProducts(productsFromLocalStorage);
    };
    getProducts();
  }, []);

  // get array of images
  useEffect(() => {
    const getSlideImages = async () => {
      const productsFromLocalStorage = await fetchProducts();
      const featuredProd = productsFromLocalStorage.filter(
        (prod) => prod.prodFeatured === true
      );

      const featuredImages = featuredProd.map((prod) => {
        return prod.prodImg;
      });
      setSlideImages(featuredImages);
    };
    getSlideImages();
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
      console.log(product);
      const currArrProducts = fetchProducts();
      // let newArr = currArrProducts.splice(index, 1, product);

      const newArr = currArrProducts.map((item, itemIndex) => {
        if (itemIndex === index) {
          return product;
        } else {
          return item;
        }
      });
      console.log(newArr);
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

  // Fetch single products
  const fetchSingleProduct = (index) => {
    const data = localStorage.getItem('products')
      ? JSON.parse(localStorage.getItem('products'))
      : [];
    return data[index];
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
              <Slideshow slideImages={slideImages} />
              <ProductList products={prodProducts} />
            </>
          )}
        />
        <Route
          path="/productspage/:id?"
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
