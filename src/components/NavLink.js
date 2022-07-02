import React from 'react';
import { Link } from 'react-router-dom';
import voice from '../images/voice.png';
import settings from '../images/settings.png';
import arrow from '../images/back-arrow.png';
import './styles/NavLink.css';

function NavLink() {
  return (
    <nav className="nav">
      <div className="backNav">
        <Link to="/">
          <img src={arrow} alt="Back Arrow" />
        </Link>
        <h2>2022</h2>
      </div>
      <div>
        <img src={voice} alt="Voice recorder" />
        <img src={settings} alt="Settings" />
      </div>
    </nav>
  );
}

export default NavLink;
