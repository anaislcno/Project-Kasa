import React from 'react';
import { useState } from 'react';
import previousVector from "../../assets/previous-vector.svg"
import nextVector from "../../assets/next-vector.svg"
import '../Slideshow/Slideshow.scss'

const Slideshow = ({pictures}) => {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(pictures) || pictures.length <= 0) {
      return null;
  }

  return (
      <section className='slider'>
        {pictures.length > 1 && (
          <>
            <img src={previousVector} className='slider__icon slider__icon--left' alt='' onClick={prevSlide} />
            <img src={nextVector} className='slider__icon slider__icon--right' alt='' onClick={nextSlide} />
            <div className='slide__number'>
                {current + 1}/{length}
            </div>
          </>
        )}
          {pictures.map((image, index) => {
              return (
                <div
                    className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (
                    <img src={image} alt='' className='slider__img' />
                    )}
                </div>
              )
          })}
      </section>
  )
}

export default Slideshow