import Product from './Product';
// import AddModal from './--AddModal';
import { React, useState, useEffect } from 'react';
import SimpleDateTime from 'react-simple-timestamp-to-date';
import ImageThumb from './ImageThumb';

const ProductsPage = ({ products, onAdd, onDelete, onEdit }) => {
  // Form state
  const [index, setIndex] = useState(null);
  const [id, setProdId] = useState('');
  const [action, setAction] = useState('add');
  const [prodName, setProdName] = useState('');
  const [prodPrice, setProdPrice] = useState('');
  const [prodDesc, setProdDesc] = useState('');
  const [prodImg, setProdImg] = useState('');
  const [prodFeatured, setProdFeatured] = useState(false);
  const [prodTimestamp, setProdTimestamp] = useState('');
  const [prodArr, setProdArr] = useState([]);

  // form methods

  useEffect(() => {
    const timer = setTimeout(() => {
      setProdArr(products);
    }, 5000);

    return () => clearTimeout(timer);
  }, [products]);

  useEffect(() => {
    const returnedDate = timeFormatter();
    setProdTimestamp(returnedDate);
  }, []);

  const OnSubmit = (e) => {
    e.preventDefault();
    if (!prodName) {
      alert('Please add product name');
      return;
    }

    if (action === 'add') {
      onAdd(
        {
          prodName,
          prodPrice,
          prodDesc,
          prodImg,
          prodFeatured,
          prodTimestamp,
        },
        action,
        index
      );
    } else {
      onAdd(
        {
          id,
          prodName,
          prodPrice,
          prodDesc,
          prodImg,
          prodFeatured,
          prodTimestamp,
        },
        action,
        index
      );
    }

    setProdName('');
    setProdDesc('');
    setProdImg(null);
    setProdPrice('');
    setProdFeatured(false);
    setProdTimestamp('');
    setAction('add');
  };

  // on Edit
  const editHandler = (editId, prodIndex, action) => {
    const singleProd = fetchSingleProduct(prodIndex);
    const {
      index,
      id,
      prodName,
      prodPrice,
      prodDesc,
      prodImg,
      prodFeatured,
      prodTimestamp,
    } = singleProd;

    setIndex(prodIndex);
    setAction(action);
    setProdId(editId);
    setProdName(prodName);
    setProdPrice(prodPrice);
    setProdDesc(prodDesc);
    setProdImg(prodImg);
    setProdFeatured(prodFeatured);
    setProdTimestamp(prodTimestamp);

    document.querySelector('#formHeader').innerHTML = 'Update Product';
  };

  // Fetch single product using prodIndex
  const fetchSingleProduct = (prodIndex) => {
    try {
      const data = localStorage.getItem('products')
        ? JSON.parse(localStorage.getItem('products'))
        : [];

      return data[prodIndex];
    } catch (err) {
      console.error(err);
    }
  };

  const onCancel = () => {
    document.querySelector('#form-name').value = '';
    document.querySelector('#form-price').value = '';
    document.querySelector('#form-desc').value = '';
    document.querySelector('#form-img').value = '';
    document.querySelector('#form-featured').checked = '';
    document.querySelector('#form-submit').value = 'Add';
    setProdName('');
    setProdDesc('');
    setProdImg(null);
    setProdPrice('');
    setProdFeatured(false);
    setProdTimestamp('');
    setAction('add');

    document.querySelector('#formHeader').innerHTML = 'Add a Product';
  };

  const timeFormatter = () => {
    let today = new Date();
    let date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    let time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    let dateTime = date + ' ' + time;

    const dateTimeProperties = {
      dateSeparator: '-',
      timeSeparator: ':',
      format: 'YMD',
      showTime: '1',
      children: dateTime,
    };

    const formattedDate = SimpleDateTime(dateTimeProperties);
    return formattedDate;
  };

  const imgUploadHandler = (e) => {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      setProdImg(reader.result);
    });
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="flex flex-col items-center justify-evenly">
      <h3 className="w-full text-center text-3xl mb-10">Products Page</h3>
      <div className="flex">
        <div className="text-center mr-10">
          <h3 className="mb-3" id="formHeader">
            Add a Product
          </h3>
          {/* FORM */}
          <div className="max-w-lg mx-auto border border-gray-300 rounded-lg py-5 px-3 mb-20 bg-white">
            <form
              onSubmit={OnSubmit}
              className="max-w-2xl mx-auto"
              encType="multipart/form-data"
            >
              <div className="flex items-center justify-between mb-3">
                <label htmlFor="name">Product Name</label>
                <input
                  id="form-name"
                  type="text"
                  name="name"
                  placeholder="Product Name*"
                  className="border border-gray-300 py-1 px-2"
                  value={prodName}
                  onChange={(e) => setProdName(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between mb-3">
                <label htmlFor="price">Price</label>
                <input
                  id="form-price"
                  type="text"
                  name="price"
                  placeholder="Price*"
                  className="border border-gray-300 py-1 px-2"
                  value={prodPrice}
                  onChange={(e) => setProdPrice(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between mb-3">
                <label htmlFor="name">Description</label>
                <input
                  id="form-desc"
                  type="text"
                  name="description"
                  placeholder="Description*"
                  className="border border-gray-300 py-1 px-2"
                  value={prodDesc}
                  onChange={(e) => setProdDesc(e.target.value)}
                />
              </div>

              <div className="flex flex-col items-center justify-between mb-3">
                <input
                  id="form-img"
                  type="file"
                  name="file"
                  accept="image/*"
                  onChange={imgUploadHandler}
                />
                {prodImg && <ImageThumb image={prodImg} />}
              </div>

              <div className="flex items-center justify-between mb-3" disabled>
                <label htmlFor="featured">Set Product as Featured</label>
                <input
                  id="form-featured"
                  type="checkbox"
                  value={prodFeatured}
                  checked={prodFeatured}
                  onChange={(e) => setProdFeatured(e.currentTarget.checked)}
                />
              </div>
              <input
                id="form-submit"
                type="submit"
                value="Save"
                className="cursor-pointer py-4 px-3 w-full mb-2 rounded-sm mr-3 bg-green-200"
              />
            </form>
            <button
              className="cursor-pointer py-4 px-3 w-full mb-2 rounded-sm bg-red-200"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
          {/* END FORM */}
        </div>

        {/* TABLE*/}
        <div className="flex flex-col flex-between mx-auto h-full">
          <div className="mb-5 text-center">
            <h2 className="font-semibold">Products List</h2>
          </div>
          <div>
            {products.length > 0 ? (
              <table className="table-auto border-collapse border border-green-800 max-w-7xl mx-auto mb-20">
                <thead>
                  <tr>
                    <th className="border border-green-600 px-5">Product ID</th>
                    <th className="border border-green-600 px-5">Image</th>
                    <th className="border border-green-600 px-5">
                      Product Name
                    </th>
                    <th className="border border-green-600 px-5">Price</th>
                    <th className="border border-green-600 px-5">
                      Description
                    </th>
                    <th className="border border-green-600 px-5">Featured</th>
                    <th className="border border-green-600 px-5">Edit</th>
                    <th className="border border-green-600 px-5">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <Product
                      key={product.id}
                      index={index}
                      id={product.id}
                      name={product.prodName}
                      price={product.prodPrice}
                      desc={product.prodDesc}
                      img={product.prodImg}
                      featured={product.prodFeatured}
                      timestamp={product.prodTimestamp}
                      onDelete={onDelete}
                      onEdit={editHandler}
                    />
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="max-w-xs bg-red-300 py-3 px-5 mb-10 mx-auto">
                No products yet
              </p>
            )}
          </div>
        </div>
        {/* END TABLE */}
      </div>
    </div>
  );
};

export default ProductsPage;
