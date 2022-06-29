const baseURL = 'https://covid-api.mmediagroup.fr/v1/';
export const caseURL = baseURL.concat('cases');

// Action Types
const GET_CASES = 'GET_CASES';

// Action Creaters
const getCases = (payload) => ({ type: GET_CASES, payload });

// Fetch cases
export const fetchCases = () => async (dispatch) => {
  const res = await fetch(caseURL);
  const resJSON = await res.json();
  const allCases = [];
  Object.entries(resJSON).map((item) => allCases.push(item[1].All));
  return dispatch(getCases(allCases));
};

const casesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CASES:
      return action.payload;
    default:
      return state;
  }
};

export default casesReducer;
