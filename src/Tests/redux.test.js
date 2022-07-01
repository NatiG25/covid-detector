import countryReducer, { fetchCountries, getCountries } from '../redux/Countries/countries';
import regionsReducer, { getRegions, fetchRegions } from '../redux/Regions/regions';
import allCountries from './__testData__/allCountries';
import allRegions from './__testData__/allRegions';

jest.mock('../redux/Countries/https');
jest.mock('../redux/Regions/http');

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

describe('API Mocks', () => {
  test('Mock countries API', () => {
    const dispatch = jest.fn();
    dispatch(fetchCountries());
  });

  test('Mock regions API', () => {
    const dispatch = jest.fn();
    dispatch(fetchRegions());
  });
});
