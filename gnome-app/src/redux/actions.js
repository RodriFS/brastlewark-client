import * as types from './types';

const getGnomes = payload => ({
  type: types.FETCH_GNOMES,
  payload
});

const searchGnomes = payload => ({
  type: types.SEARCH_GNOMES,
  payload
});

const setFilter = payload => ({
  type: types.SET_FILTER,
  payload
});

export { getGnomes, searchGnomes, setFilter };
