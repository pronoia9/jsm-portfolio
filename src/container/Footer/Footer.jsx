import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [name, setName] = useState('');

  const handleChangeInput = () => {};

  return (
    <>
      <h2 className='head-text'>Take a coffee & chat with me</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a className='p-text' href='mailto:jayansin9@gmail.com'>
            jayansin9@gmail
          </a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a className='p-text' href='tel:+1 123 456 789'>
            +1 123 456 789
          </a>
        </div>
      </div>

      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input
            className='p-text'
            type='text'
            name=''
            placeholder='Your Name'
            value={name}
            onChange={() => handleChangeInput()}
          />
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg');
