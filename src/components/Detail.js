import React from 'react';
import { v4 as uuid } from 'uuid';
import { useSelector } from 'react-redux';

const Detail = () => {
  const cases = useSelector((state) => state.cases);

  return (
    <>
      {cases.length === 0
        ? 'no result'
        : cases.map((cases) => <h3 key={uuid}>{cases.confirmed}</h3>)}
      ;
    </>
  );
};

export default Detail;
