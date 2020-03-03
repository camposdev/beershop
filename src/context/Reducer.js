const Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
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
