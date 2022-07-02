import fetchData from './https';

// Action Types
const GET_COUNTRIES = 'GET_COUNTRIES';

// Action Creaters
export const getCountries = (payload) => ({ type: GET_COUNTRIES, payload });

// Fetch cases
export const fetchCountries = () => async (dispatch) => {
  const data = await fetchData();
  const allCountries = [];
  Object.entries(data).map((item) => allCountries.push(item[1].All));
  return dispatch(getCountries(allCountries));
};

const countryReducer = (state = [], action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};

export default countryReducer;
