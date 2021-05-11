import { useState } from 'react';
import React, { useEffect } from 'react';
import SimpleDateTime from 'react-simple-timestamp-to-date';

const AddEditProductForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [img, setImg] = useState('');
  const [featured, setFeatured] = useState(false);
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    const returnedDate = timeFormatter();
    setTimestamp(returnedDate);
  }, [timestamp]);

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
            type="text"
            name="description"
            placeholder="Description*"
            className="border border-gray-300 py-1 px-2"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between mb-3">
          <input type="file" name="file" onChange={imgUploadHandler} />
          {/* {file && <ImageThumb image={file} />} */}
        </div>

        <div className="flex items-center justify-between mb-3">
          <label htmlFor="featured">Set Product as Featured</label>
          <input
            type="checkbox"
            value={featured}
            checked={featured}
            onChange={(e) => setFeatured(e.currentTarget.checked)}
          />
        </div>

        <input
          type="submit"
          value="Save Product"
          className="cursor-pointer block py-4 px-3 w-full mb-2 rounded-sm"
        />
      </form>
    </div>
  );
};

export default AddEditProductForm;
