import { updateLocalCart } from '../services/shoppingCart';

const updateCartList = (items, newItem) => {
  let isDuplicate = false;
  items.forEach((item) => {
    if (item.id === newItem.id) {
      isDuplicate = true;
    }
  });

  if (isDuplicate) {
    return items.map((item) => {
      if (item.id === newItem.id) {
        item.quantity = Number(item.quantity) + 1;
      }
      return item;
    });
  }

  newItem.quantity = 1;
  const finalList = [...items, newItem];
  updateLocalCart(finalList);
  return finalList;
};

const updateCountCart = (items, updatedItem) => {
  const updatedCount = items.map((item) => {
    if (item.id === updatedItem.id) {
      item.quantity = updatedItem.value;
    }
    return item;
  });

  updateLocalCart(updatedCount);
  return updatedCount;
};

const removeProductCart = (items, removedItem) => {
  const updatedList = items.filter((item) => item.id !== removedItem);
  updateLocalCart(updatedList);
  return updatedList;
};

const Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_CART':
      return {
        ...state,
        cart: updateCartList(state.cart, action.payload)
      };
    case 'UPDATE_COUNT_CART':
      return {
        ...state,
        cart: updateCountCart(state.cart, action.payload)
      };
    case 'REMOVE_PRODUCT_CART':
      return {
        ...state,
        cart: removeProductCart(state.cart, action.payload)
      };
    default:
      return state;
  }
};

export default Reducer;
