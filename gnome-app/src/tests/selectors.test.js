import { filteredGnomes } from '../redux/selectors';
import * as mocks from './mocks';

describe('selectors', () => {
  it('should not filter if there are no filters', () => {
    const state = {
      gnomes: mocks.gnomes.Brastlewark,
      filters: [],
      search: ''
    };

    const expectedState = mocks.gnomes.Brastlewark;
    expect(filteredGnomes(state)).toEqual(expectedState);
  });

  it('should filter gnomes by filter', () => {
    const state = {
      gnomes: mocks.gnomes.Brastlewark,
      filters: mocks.filters,
      search: ''
    };

    const expectedState = [mocks.gnomes.Brastlewark[1]];
    expect(filteredGnomes(state)).toEqual(expectedState);
  });

  it('should filter gnomes by search', () => {
    const state = {
      gnomes: mocks.gnomes.Brastlewark,
      filters: [],
      search: 'F'
    };

    const expectedState = [mocks.gnomes.Brastlewark[1]];
    expect(filteredGnomes(state)).toEqual(expectedState);
  });
});
