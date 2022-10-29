import { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    client.fetch('*[_type == "brands"]').then((data) => { setBrands(data); });
    client.fetch('*[_type == "testimonials"]').then((data) => { setTestimonials(data); });
  }, []);

  const handleClick = (index) => { setCurrentIndex(index); };

  const curr = testimonials[currentIndex];
  return (
    <>
      {testimonials.length && (
        <>
          <div className='app__testimonial-item app__flex'>
            <img src={urlFor(curr.imgurl)} alt='testimonial' />
            <div className='app__testimonial-content'>
              <p className='p-text'>{curr.feedback}</p>
              <div>
                <h4 className='bold-text'>{curr.name}</h4>
                <h5 className='p-text'>{curr.company}</h5>
              </div>
            </div>
          </div>

          <div className='app__testimonial-btns app__flex'>
            <div
              className='app__flex'
              onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div
              className='app__flex'
              onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Testimonial, 'app__testimonial'), 'testimonial', 'app__primarybg');
