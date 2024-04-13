import React, { useState } from 'react';
import "./Navbar.css";
import hamburger from '../assets/hamburger.svg';
import donut from "../assets/donut-chart.png";
import RightSection from './RightSection';
function Navbar({transcription}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <div className="home">
        HOME
      </div>
      <div className="logo-name">
        <img className='logo' src={donut} alt="Donut Logo" />
        COLLAB EASE hy!
      </div>
      <div className="hamburger" onClick={handleHamburgerClick}>
        <img className="H-icon" src={hamburger} alt="Hamburger Icon" />
      </div>
      <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={handleHamburgerClick}></div>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <RightSection transcription={transcription}/>
      </div>
    </div>
  );
}

export default Navbar;
