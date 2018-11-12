const filteredGnomes = state => {
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
