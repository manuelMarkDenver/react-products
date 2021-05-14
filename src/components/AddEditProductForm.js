import { React, useState, useEffect } from 'react';
import SimpleDateTime from 'react-simple-timestamp-to-date';

const AddEditProductForm = ({ onAdd, onEdit, singleProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [img, setImg] = useState('');
  const [featured, setFeatured] = useState(false);
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    const returnedDate = timeFormatter();
    setTimestamp(returnedDate);
  }, []);

  const OnSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert('Please add product name');
      return;
    }

    onAdd({ name, price, desc, img, featured, timestamp });

    setName('');
    setDesc('');
    setImg(null);
    setPrice('');
    setFeatured(false);
    setTimestamp('');
  };

  const onCancel = () => {
    document.querySelector('#form-name').value = '';
    document.querySelector('#form-price').value = '';
    document.querySelector('#form-desc').value = '';
    document.querySelector('#form-img').value = '';
    document.querySelector('#form-featured').checked = '';
    setName('');
    setDesc('');
    setImg(null);
    setPrice('');
    setFeatured(false);
    setTimestamp('');
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
      setImg(reader.result);
    });
    reader.readAsDataURL(e.target.files[0]);
  };

  // const ImageThumb = ({ image }) => {
  //   return <img src={URL.createObjectURL(image)} alt={image.name} />;
  // };

  return (
    <div className="max-w-lg mx-auto border border-gray-300 rounded-lg py-5 px-3 mb-20">
      <form onSubmit={OnSubmit} className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-3">
          <label htmlFor="name">Product Name</label>
          <input
            id="form-name"
            type="text"
            name="name"
            placeholder="Product Name*"
            className="border border-gray-300 py-1 px-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between mb-3">
          <input
            type="file"
            name="file"
            onChange={imgUploadHandler}
            id="form-img"
          />
          {/* {file && <ImageThumb image={file} />} */}
        </div>

        <div className="flex items-center justify-between mb-3">
          <label htmlFor="featured">Set Product as Featured</label>
          <input
            id="form-featured"
            type="checkbox"
            value={featured}
            checked={featured}
            onChange={(e) => setFeatured(e.currentTarget.checked)}
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
        onClick={() => onCancel()}
      >
        Cancel
      </button>
    </div>
  );
};

export default AddEditProductForm;
