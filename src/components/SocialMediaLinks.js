// Social media icons

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialMediaLinks = () => {
  return (
    <div className="social-media">
      <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
      <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
      <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
    </div>
  );
};

export default SocialMediaLinks;
