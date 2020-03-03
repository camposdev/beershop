/* eslint-disable */
export default (array, key) => {
  const lookup = {};
  return array.filter((obj) => !lookup[obj[key]] && (lookup[obj[key]] = true));
};
