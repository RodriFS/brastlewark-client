/**
 * @name Profile Action
 * @memberof module:redux/actions
 * @type {ReduxAction}
 * @return {Object} Action schema
 */
import * as types from './types';

/**
 * @function
 * @name getGnomes
 * @description get all gnomes from redux store
 * @param  {Object} payload - api fetch object
 * @return  {OBJECT} Action context
 */
const getGnomes = payload => ({
  type: types.FETCH_GNOMES,
  payload
});

/**
 * @function
 * @name searchGnomes
 * @description stores search query in redux
 * @param  {String} payload - search bar input
 * @return  {OBJECT} Action context
 */
const searchGnomes = payload => ({
  type: types.SEARCH_GNOMES,
  payload
});

/**
 * @function
 * @name setFilter
 * @description stores filters in redux
 * @param  {Object} payload - filters object
 * @return  {OBJECT} Action context
 */
const setFilter = payload => ({
  type: types.SET_FILTER,
  payload
});

export { getGnomes, searchGnomes, setFilter };
