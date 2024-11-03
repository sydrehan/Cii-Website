import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Array of slide data with images
const slides = [
  { image: 'src/assets/Images/GITS_RND_3.jpg' },
  { image: 'src/assets/Images/GITS_RND_4-1.jpg' },
  { image: 'src/assets/Images/GITS_RND_5.jpg' },
  { image: 'src/assets/Images/GITS_RND_7.jpg' },
];

// Slideshow component
const Slideshow = () => {
  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Time between slides
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative mx-auto w-1/2 p-5 bg-transparent top-2">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="flex flex-col items-center justify-center h-80">
            <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <button className="absolute top-1/2 right-[-10%] transform -translate-y-1/2 bg-white rounded-full p-2 text-2xl hover:bg-gray-200" onClick={onClick}>
    &gt;
  </button>
);

// Prop validation for NextArrow
NextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <button className="absolute top-1/2 left-[-10%] transform -translate-y-1/2 bg-white rounded-full p-2 text-2xl hover:bg-gray-200" onClick={onClick}>
    &lt;
  </button>
);

// Prop validation for PrevArrow
PrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Slideshow;
