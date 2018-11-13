import reducer from '../redux/reducers';
import { FETCH_GNOMES, SEARCH_GNOMES, SET_FILTER } from '../redux/types';
import * as mocks from './mocks';

describe('reducers', () => {
  it('returns unmodified state if the action is not recognized', () => {
    const action = { type: 'default_action' };
    const initialState = {
      gnomes: [],
      search: '',
      filters: []
    };

    expect(reducer(undefined, action)).toEqual(initialState);
  });

  it('returns correct state for FETCH_GNOMES', () => {
    const action = {
      type: FETCH_GNOMES,
      payload: mocks.gnomes
    };
    const expectedState = {
      gnomes: mocks.gnomes.Brastlewark,
      search: '',
      filters: []
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('returns correct state for SEARCH_GNOMES', () => {
    const action = {
      type: SEARCH_GNOMES,
      payload: 'Tobus'
    };
    const expectedState = {
      gnomes: [],
      search: 'Tobus',
      filters: []
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('returns correct state for SET_FILTER', () => {
    const action = {
      type: SET_FILTER,
      payload: mocks.filters
    };
    const expectedState = {
      gnomes: [],
      search: '',
      filters: mocks.filters
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});
