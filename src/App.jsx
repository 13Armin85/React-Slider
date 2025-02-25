import { useState } from "react";
import "./App.css";

const images = [
  "../images/album.jpg",
  "../images/album1.jpg",
  "../images/album2.jpg",
  "../images/album3-180x180.jpg",
  "../images/hero-2-1030x494.jpg",
  "../images/hero-3.jpg",
  "../images/hero-4-1030x494.jpg",
  "../images/hero-5-705x338.jpg",
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider">
      <div className="main-slide">
        <img
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="slide-image"
        />
      </div>
      <div className="thumbnails-container">
        <button className="prev-button" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="thumbnails">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <button className="next-button" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Slider;
