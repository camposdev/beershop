export const getLocalCart = () => JSON.parse(localStorage.getItem('shopping-cart'));

export const updateLocalCart = (array) => {
  localStorage.setItem('shopping-cart', JSON.stringify(array));
};
