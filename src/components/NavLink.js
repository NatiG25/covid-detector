import React from 'react';
import { NavLink as Link } from 'react-router-dom';

function NavLink() {
  return (
    <>
      <Link to="/">Homepage</Link>
      <Link to="/detail">Detail</Link>
    </>
  );
}

export default NavLink;
