import { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
  return <div className=''></div>;
};

export default AppWrap(MotionWrap(Work, 'app__works'), 'work', 'app__primarybg');
