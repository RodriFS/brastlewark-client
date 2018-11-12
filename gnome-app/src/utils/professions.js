const getProfessions = gnomes => {
  let professions = [];
  gnomes.forEach(gnome => {
    gnome.professions.forEach(prof => {
      if (!professions.includes(prof)) {
        professions.push(prof);
      }
    });
  });
  return professions;
};

export { getProfessions };
