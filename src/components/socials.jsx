import React from 'react';
import { icons } from './images';

const Socials = () => {
  return (
    <div>
      <div className="contact-logo">
        <div>
          <a href="https://twitter.com/chifez4u">
            <img src={icons.twitter} alt="" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/nwosuifeanyiemmanuel/">
            <img src={icons.linkedin} alt="" />
          </a>
        </div>
        <div>
          <a href="https://github.com/Chifez">
            <img src={icons.github} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;
