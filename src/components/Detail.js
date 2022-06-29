import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Detail = () => {
  const regions = useSelector((state) => state.regions);

  return (
    <>
      <Link to="/">
        <button type="button">Back</button>
      </Link>
      {regions.length === 0
        ? 'no result'
        : regions.map((data) => (
          <p key={data.region}>
            {data.region}
            :
            {' '}
            {data.confirmed}
          </p>
        ))}
    </>
  );
};

export default Detail;
