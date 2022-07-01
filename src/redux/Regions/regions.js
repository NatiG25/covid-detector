import fetchDataRegions from './http';

// Action Types
const GET_REGIONS = 'GET_REGIONS';

// Action Creaters
export const getRegions = (payload) => ({ type: GET_REGIONS, payload });

export const fetchRegions = (countries) => async (dispatch) => {
  const regions = await fetchDataRegions(countries);
  const allRegions = [];
  Object.entries(regions).map((region) => allRegions.push({
    region: region[0],
    confirmed: region[1].confirmed,
    country: region[1].country,
  }));
  console.log(allRegions);
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
