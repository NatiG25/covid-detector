import React from 'react';
import { useSelector } from 'react-redux';

const Detail = () => {
  const regions = useSelector((state) => state.regions);

  return (
    <>
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
