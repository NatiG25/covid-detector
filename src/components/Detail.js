import React from 'react';
import { useSelector } from 'react-redux';
import './styles/Detail.css';
import europe from '../images/europe.png';

const Detail = () => {
  const allRegions = useSelector((state) => state.regions);

  return (
    <section>
      {allRegions.filter((item) => item.country)
        .map((itemFilter) => (
          <div key={itemFilter.country} className="headerRegion">
            <img className="europeIMG" src={europe} alt="europe" />
            <div className="totalRegion">
              <h2>{itemFilter.country}</h2>
              <p>
                Total Cases:
                {' '}
                {itemFilter.confirmed}
              </p>
            </div>
          </div>
        ))}
      <p className="subHeader">CITY/TOWN BREAKDOWN-2022</p>
      {allRegions.length === 0
        ? 'no result'
        : allRegions.filter((region) => !(region.country)).map((data) => (
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
