import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import default_BG from '../img/default-bg.jpg';

const Slideshow = React.memo(({ products }) => {
  const [images, setImages] = useState(['../images/default-bg.jpg']);
  const imgArr = products.filter((img) => img.prodFeatured === true);

  const fadeProperties = {
    duration: 3000,
    pauseOnHover: true,
  };

  console.log(imgArr);
  return (
    <div className="border-b-4 border-gray-300">
      {imgArr.length === 0 ? (
        <Slide {...fadeProperties}>
          {images.map((prod, index) => (
            <div key={index} className="each-slide">
              <img
                src={default_BG}
                alt=""
                className="w-full mx-auto h-auto"
                style={{ height: '100vh' }}
              />
            </div>
          ))}
        </Slide>
      ) : (
        <Slide {...fadeProperties}>
          {imgArr.map((prod, index) => (
            <div key={index} className="each-slide">
              <img
                src={prod.prodImg}
                alt=""
                className="max-w-lg mx-auto h-auto"
                style={{ height: '70vh' }}
              />
            </div>
          ))}
        </Slide>
      )}
    </div>
  );
});

export default Slideshow;
