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
        item.count = Number(item.count) + 1;
      }
      return item;
    });
  }

  newItem.count = 1;
  return [...items, newItem];
};

const updateCountCart = (items, updatedItem) => items.map((item) => {
  if (item.id === updatedItem.id) {
    item.count = updatedItem.value;
  }
  return item;
});

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
        cart: state.cart.filter((item) => item.id !== action.payload)
      };
    default:
      return state;
  }
};

export default Reducer;
