import React from 'react';
import { v4 as uuid } from 'uuid';
import { useSelector } from 'react-redux';

const Homepage = () => {
  const countries = useSelector((state) => state.countries);
  console.log(countries);

  return (
    <>
      {countries.length === 0
        ? 'no result'
        : countries.map((country) => <h3 key={uuid}>{country}</h3>)}
      ;
    </>
  );
};

export default Homepage;
