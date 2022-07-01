import React from 'react';
import { useSelector } from 'react-redux';
import './styles/Detail.css';

const Detail = () => {
  const regions = useSelector((state) => state.regions);

  return (
    <section>
      {regions.filter((all) => all.country)
        .map((allfilter) => (
          <div key={allfilter.country} className="regionCases">
            <h2>{allfilter.country}</h2>
            <p>
              Total Cases:
              {allfilter.confirmed}
            </p>
          </div>
        ))}
      <p className="subHeader">CITY/TOWN BREAKDOWN-2022</p>
      {regions.length === 0
        ? 'no result'
        : regions.filter((region) => !(region.country)).map((data) => (
          <div key={data.region} className="regions">
            <div>
              <p>
                {data.region}
              </p>
            </div>
            <div>
              <p>
                {data.confirmed}
                {' '}
                cases
              </p>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Detail;
