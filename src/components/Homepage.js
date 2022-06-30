import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRegions } from '../redux/regions';

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
      />
      <hr />
      {countries.length === 0
        ? 'no result'
        : countries.filter((item) => item.includes(filter) || filter === '')
          .map((country) => (
            <div key={country}>
              <a href=".">
                {country}
              </a>
              <Link to="detail">
                <button type="button" onClick={() => handleRegions(country)}>Click me</button>
              </Link>
              <hr />
            </div>
          ))}
    </>
  );
};

export default Homepage;
