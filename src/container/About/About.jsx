import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './About.scss';

const abouts = [
  { title: 'Frontend Development', description: 'I am a good web developer', imageUrl: images.about01 },
  { title: 'Backend Development', description: 'I am a good web developer', imageUrl: images.about02 },
  { title: 'MERN Stack', description: 'I am a good web developer', imageUrl: images.about03 },
  { title: 'Three.js', description: 'I am a good web developer', imageUrl: images.about04 },
];

const About = () => {
  return (
    <>
      <h2 className='head-text'>
        I know that <span>good dev</span>
        <br /> means <span>good business</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, i) => (
          <motion.div
            className='app__profiles-item'
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={about.title + i}>
            <img src={about.imageUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
