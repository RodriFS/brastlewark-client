import * as types from './types';
const initialState = {
  gnomes: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_GNOMES:
      return {
        ...state,
        gnomes: action.payload.Brastlewark
      };

    default:
      return state;
  }
};

export default reducer;
