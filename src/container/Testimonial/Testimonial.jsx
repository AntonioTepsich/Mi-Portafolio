import React, {useState, useEffect} from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFlor, client } from '../../client';
import './Testimonial.scss';

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const query =`*[_type == "testimonials"]`;
    const brandsQuery =`*[_type == "brands"]`;
    
    client.fetch(query)
      .then((data) => {
        setTestimonials(data);
      });
    
      client.fetch(brandsQuery)
      .then((data) => {
        setBrands(data);
      });
  }, []);

// -------------FALTA SEGUIR---------------------- 

  return (
    <>
      {testimonials.length && (
        <>
          <div className='app__testimonial-item app__flex'>
            {/* <img src={urlFlor(testimonials[currentIndex].imgurl)} alt='testimonial' ></img> */}
          </div>
        </>
      )}
    </>
  )
}

export default AppWrap(MotionWrap(Testimonial, 'app__testimonial'), 'testimonial', 'app__primarybg');