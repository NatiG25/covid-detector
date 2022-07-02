import { caseURL } from '../detail';

const fetchDataRegions = async (countries) => {
  const regionsURL = caseURL.concat(`?country=${countries}`);
  const res = await fetch(regionsURL);
  const resJSON = await res.json();
  return resJSON;
};

export default fetchDataRegions;
