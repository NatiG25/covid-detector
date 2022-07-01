import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRegions } from '../redux/Regions/regions';
// import rigthArrow from '../images/rigth-arrow.png';

const Homepage = () => {
  const countries = useSelector((state) => state.countries);
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const handleRegions = (country) => {
    dispatch(fetchRegions(country));
  };

  return (
    <>
      <input
        name="country"
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search"
        className="input"
      />
      {countries.length === 0
        ? 'no result'
        : countries.filter((item) => item.includes(filter) || filter === '')
          .map((country) => (
            <div key={country} className="countries">
              <a href=".">
                {country}
              </a>
              <Link to="detail">
                <button onClick={() => handleRegions(country)} type="button">Click me</button>
              </Link>
              { /* <img src={rigthArrow} alt="right-arrow" /> */ }
            </div>
          ))}
    </>
  );
};

export default Homepage;
