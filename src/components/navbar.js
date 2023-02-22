import React from 'react';
import ReactIcon from './images/react-logo.png';

export default function Navbar() {
  return (
    <nav>
      <img
        src={ReactIcon}
        alt='React Logo'
        className='nav--icon'
      />
      <h3 className='nav--logo_text'>React Facts</h3>
      <h4 className='nav--title'>React Course - Project 1</h4>
    </nav>
  );
}
