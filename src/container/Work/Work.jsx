import { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { animate, motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

//! TEMP
const categories = ['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = () => {};

  return (
    <>
      <h2 className='head-text'>
        My creative <span>portfolio</span> section
      </h2>

      <div className='app__work-filter'>
        {categories.map((item, i) => (
          <div
            className={`app__work-filter-item app__flex p-text${activeFilter === item ? ' item-active' : ''}`}
            key={i}
            onClick={() => handleWorkFilter(item)}>
            {item}
          </div>
        ))}
      </div>

      <motion.div className='' animate={animateCard}></motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, 'app__works'), 'work', 'app__primarybg');
