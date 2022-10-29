import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => <></>;

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg');
