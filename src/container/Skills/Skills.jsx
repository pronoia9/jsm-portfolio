import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    client.fetch('*[_type == "experiences"]').then((data) => {
      setExperiences(data);
    });
    client.fetch('*[_type == "skills"]').then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className='head-text'>Skills & Experiences</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
              className='app__skills-item app__flex'
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              key={skill.name}>
              <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        {experiences.length > 0 && (
          <div className='app__skills-exp'>
            {experiences
              ?.sort((a, b) => b.year - a.year)
              .map((experience) => (
                <motion.div className='app__skills-exp-item' key={experience.year}>
                  <div className='app__skills-exp-year'>
                    <p className='bold-text'>{experience.year}</p>
                  </div>
                  <motion.div className='app__skills-exp-works'>
                    {experience?.works?.map((work) => (
                      <>
                        <motion.div
                          className='app__skills-exp-work'
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.5 }}
                          data-tip
                          data-for={work.name}
                          key={work.name}>
                          <h4 className='bold-text'>{work.name}</h4>
                          <p className='p-text'>{work.company}</p>
                        </motion.div>
                        <ReactTooltip id={work.name} className='skills-tooltip' effect='solid' arrowColor='#fff'>
                          {work.desc}
                        </ReactTooltip>
                      </>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg');
