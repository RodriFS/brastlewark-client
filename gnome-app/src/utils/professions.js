/**
 * @function
 * @name getProfessions
 * @description get all common professions from all gnomes
 * @param  {Array} gnomes - all gnomes
 * @return  {Array} - professions
 */
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
