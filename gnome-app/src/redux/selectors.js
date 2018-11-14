/**
 * @name Profile Selector
 * @memberof module:redux/selectors
 * @type {ReduxSelector}
 * @return {Object} Selector Specification
 */

/**
 * @function
 * @name filteredGnomes
 * @description filters gnomes based on filters object and search query
 * @param {Object} state  - reducer state
 * @return {Array} Array of gnomes objects
 */
const filteredGnomes = state => {
  if (!state.filters || !state.gnomes) return [];
  let filters = Object.keys(state.filters).filter(el => state.filters[el]);

  // fiter by filters
  return (
    state.gnomes
      .filter(gnome => {
        return filters.every(el => gnome.professions.includes(el))
          ? gnome
          : false;
      })
      //filter by search
      .filter(gnome =>
        gnome.name.toLowerCase().includes(state.search.toLowerCase())
      )
  );
};

export { filteredGnomes };
