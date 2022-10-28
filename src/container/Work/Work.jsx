import { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { animate, motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

//! TEMP
const categories = ['Web App', 'React JS', 'FullStack', 'All'];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    client.fetch('*[_type == "works"]').then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

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

      <motion.div
        className='app__work-portfolio'
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}>
        {filterWork.map((work, i) => (
          <div className='app__work-item app__flex' key={i}>
            <div className='app__work-img app__flex'>
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                className='app__work-hover app__flex'
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0 }}>
                <a href={work.projectLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    className='app__flex'
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}>
                    <AiFillEye />
                  </motion.div>
                </a>
              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, 'app__works'), 'work', 'app__primarybg');
