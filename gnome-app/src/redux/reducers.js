/**
 * @name Profile Reducer
 * @memberof module:redux/reducers
 * @type {ReduxReducer}
 * @return {Object} Reducer Specification
 */
import * as types from './types';

const initialState = {
  gnomes: [],
  search: '',
  filters: []
};

/**
 * @function
 * @name reducer
 * @memberof module:redux/reducers
 * @description reduces actions into the state
 * @param {Object} state  - reducer state
 * @param {Object} action - action context
 * @return {OBJECT} Action context
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_GNOMES:
      return {
        ...state,
        gnomes: action.payload.Brastlewark
      };

    case types.SEARCH_GNOMES:
      return {
        ...state,
        search: action.payload
      };

    case types.SET_FILTER:
      return {
        ...state,
        filters: { ...state.filters, ...action.payload }
      };
    default:
      return state;
  }
};

export default reducer;
