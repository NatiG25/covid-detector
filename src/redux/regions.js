import { caseURL } from './detail';

// Action Types
const GET_REGIONS = 'GET_REGIONS';

// Action Creaters
export const getRegions = (payload) => ({ type: GET_REGIONS, payload });

export const fetchRegions = (countries) => async (dispatch) => {
  const regionsURL = caseURL.concat(`?country=${countries}`);
  const res = await fetch(regionsURL);
  const resJSON = await res.json();
  const allRegions = [];
  Object.entries(resJSON).map((item) => allRegions.push({
    region: item[0],
    confirmed: item[1].confirmed,
  }));
  return dispatch(getRegions(allRegions));
};

const regionsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_REGIONS:
      return action.payload;
    default:
      return state;
  }
};

export default regionsReducer;
