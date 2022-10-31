import React from 'react';
import Vector from '../../assets/Vector.png';
import I4G from '../../assets/I4G.png';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <hr />
      </div>
      <div className='footer-link'>
        <img src={Vector} alt='vector' />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={I4G} alt='i4g' />
      </div>
    </div>
  )
}

export default Footer