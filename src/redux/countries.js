import { caseURL } from './detail';

// Action Types
const GET_CONTRIES = 'GET_CONTRIES';

// Action Creaters
const getCountries = (payload) => ({ type: GET_CONTRIES, payload });

// Fetch cases
export const fetchCountries = () => async (dispatch) => {
  const res = await fetch(caseURL);
  const resJSON = await res.json();
  const allCountries = [];
  Object.entries(resJSON).map((item) => allCountries.push(item[0]));
  return dispatch(getCountries(allCountries));
};

const countryReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CONTRIES:
      return action.payload;
    default:
      return state;
  }
};

export default countryReducer;
