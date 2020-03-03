import removeDuplicates from './removeDuplicates';

export default (list, key) => {
  const merged = list.map((item) => {
    const listItem = item;
    listItem.count = list.filter((p) => p[key] === listItem[key]).length;
    return listItem;
  });

  return removeDuplicates(merged, key);
};
