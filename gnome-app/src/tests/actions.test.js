import configureStore from 'redux-mock-store';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FETCH_GNOMES, SEARCH_GNOMES, SET_FILTER } from '../redux/types';
import { getGnomes, searchGnomes, setFilter } from '../redux/actions';
import * as mocks from './mocks';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore();
const store = mockStore();

describe('actions are dispatched', () => {
  beforeEach(() => {
    store.clearActions();
  });
  it('dispatches getGnomes action', () => {
    const expectedActions = [{ type: FETCH_GNOMES, payload: mocks.gnomes }];
    store.dispatch(getGnomes(mocks.gnomes));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches searchGnomes action', () => {
    const expectedActions = [
      { type: SEARCH_GNOMES, payload: mocks.gnomes.name }
    ];
    store.dispatch(searchGnomes(mocks.gnomes.name));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches setFilter action', () => {
    const expectedActions = [{ type: SET_FILTER, payload: mocks.filters }];
    store.dispatch(setFilter(mocks.filters));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
