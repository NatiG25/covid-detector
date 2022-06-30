import countryReducer, { fetchCountries, getCountries } from '../redux/Countries/countries';
import regionsReducer, { getRegions } from '../redux/regions';
import allCountries from './__testData__/allCountries';
import allRegions from './__testData__/allRegions';

describe('Should render the correct list of info', () => {
  test('Should result in a list of countries', () => {
    expect(countryReducer([], getCountries(allCountries)))
      .toEqual(allCountries);
  });

  test('Should result in a list of regions with confirmed cases', () => {
    expect(regionsReducer([], getRegions(allRegions)))
      .toEqual(allRegions);
  });
});

jest.mock('../redux/Countries/countries')
test('Should dispatch a value from the mock API', () => {
  expect(fetchCountries()).toBe({
    type: 'GET_COUNTRIES',
    payload: ['Afghanistan']
  })
})
