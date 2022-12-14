import { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const categories = ['React', 'FullStack', 'Web 3.0', 'All'];

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWorks, setFilterWorks] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    client.fetch('*[_type == "works"]').then((data) => {
      setWorks(data);
      setFilterWorks(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === 'All') setFilterWorks(works);
      else setFilterWorks(works.filter((work) => work.tags.includes(item)));
    }, 500);
  };

  return (
    <>
      <h2 className='head-text'>
        My creative <span>portfolio</span> section
      </h2>

      <div className='app__works-filter'>
        {categories.map((item, i) => (
          <div
            className={`app__works-filter-item app__flex p-text${activeFilter === item ? ' item-active' : ''}`}
            key={i}
            onClick={() => handleWorkFilter(item)}>
            {item}
          </div>
        ))}
      </div>

      <motion.div
        className='app__works-portfolio'
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}>
        {filterWorks.map((work, i) => (
          <div className='app__works-item app__flex' key={i}>
            <div className='app__works-img app__flex'>
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                className='app__works-hover app__flex'
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}>
                <a href={work.projectLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    className='app__flex'
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}>
                    <AiFillEye />
                  </motion.div>
                </a>

                <a href={work.codeLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    className='app__flex'
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}>
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className='app__works-content app__flex'>
              <h4 className='bold-text'>{work.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className='app__works-tag app__flex'>
                <p className='p-text'>{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, 'app__works'), 'work', 'app__primarybg');
