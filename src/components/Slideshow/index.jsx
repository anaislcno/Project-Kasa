import React from 'react';
import { useState } from 'react';
import previousVector from "../../assets/previous-vector.svg"
import nextVector from "../../assets/next-vector.svg"
import '../Slideshow/Slideshow.scss'
import { sliderData } from './sliderData';

const Slideshow = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
  };

  console.log(current);

  const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
  }

  return (
      <section className='slider'>
          <img src={previousVector} className='slider__icon slider__icon--left' alt='' onClick={prevSlide} />
          <img src={nextVector} className='slider__icon slider__icon--right' alt='' onClick={nextSlide} />
          {sliderData.map((slide, index) => {
              return (
                <div
                className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && (
                  <img src={slide.image} alt='' className='slider__img' />
                )}
              </div>
              )
          })}
      </section>
  )
}

export default Slideshow