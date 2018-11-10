import * as types from './types';

const getGnomes = payload => ({
  type: types.FETCH_GNOMES,
  payload
});

export { getGnomes };
