import { useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slideshow = ({ products }) => {
  const imgArr = products.filter((img) => img.prodFeatured === true);

  const fadeProperties = {
    duration: 3000,
    pauseOnHover: true,
  };
  return (
    <div>
      <Slide {...fadeProperties}>
        {imgArr.map((prod, index) => (
          <div key={index} className="each-slide">
            <img
              src={prod.prodImg}
              alt=""
              className="max-w-7xl mx-auto h-auto w-96"
            />
            {/* <div
              style={{ backgroundImage: `url(${prod.prodImg})` }}
              className="bg-cover bg-center"
            ></div> */}
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
