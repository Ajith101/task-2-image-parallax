import React, { useState } from "react";

import "swiper/css";
import Swiper from "react-id-swiper";
import "./slider.css";

const SliderConfigs = {
  containerClass: "swiper-container hero-slider",
  parallax: true,
  centeredSlides: true,
  speed: 500,
  spaceBetween: 0,
  effect: "slide",
};

const images = [
  {
    image:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Image 1",
    description: "This is First slide",
  },
  {
    image:
      "https://images.unsplash.com/photo-1699002159193-68fd17410f46?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Image 2",
    description: "This is Second slide",
  },
  {
    image:
      "https://images.unsplash.com/photo-1702728139631-e50607576454?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Image 3",
    description: "This is Third slide",
  },
  {
    image:
      "https://images.unsplash.com/photo-1635439030842-babc7a7d2a4a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Image 4",
    description: "This is Fourth slide",
  },
];

const Slider = () => {
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;

  return (
    <Swiper {...SliderConfigs} getSwiper={setParallaxSwiper}>
      {images.map((item, id) => (
        <div key={id} className="hero-slide">
          <div
            className="slide-image"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <img src={item.image} alt="image1" />
          </div>
          <div className="col-md-6 offset-md-3 my-auto text-center text-white content">
            <h1 className="text-uppercase mb-2 font-weight-bold">
              {item.title}
            </h1>
            <p className="mb-5 small">{item.description}</p>
          </div>
        </div>
      ))}
    </Swiper>
  );
};

export default Slider;
