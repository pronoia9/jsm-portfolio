import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    const contact = { _type: 'contact', name: name, email: email, message: message };
    client.create(contact).then((data) => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

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

      {!isFormSubmitted ? (
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input
              className='p-text'
              type='text'
              name='name'
              placeholder='Your Name'
              value={name}
              onChange={(e) => handleChangeInput()}
            />
          </div>
          <div className='app__flex'>
            <input
              className='p-text'
              type='text'
              name='email'
              placeholder='Your Email'
              value={email}
              onChange={(e) => handleChangeInput()}
            />
          </div>
          <div className='app__flex'>
            <textarea
              className='p-text'
              placeholder='Your Message'
              value={message}
              name='message'
              onChange={(e) => handleChangeInput()}
            />
          </div>
          <button className='p-text' type='button' onClick={handleSubmit}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for getting in touch</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg');
