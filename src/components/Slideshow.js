import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slideshow = ({ slideImages }) => {
  const fadeProperties = {
    duration: 3000,
    pauseOnHover: true,
  };
  return (
    <div>
      <Slide {...fadeProperties}>
        {slideImages.map((img, index) => (
          <div key={index} className="each-slide">
            <div
              style={{ backgroundImage: `url(${img})` }}
              className="bg-cover bg-center"
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
