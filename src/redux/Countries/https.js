import { caseURL } from '../detail';

const fetchData = async () => {
  const res = await fetch(caseURL);
  const resJSON = await res.json();
  return resJSON;
};

export default fetchData;
