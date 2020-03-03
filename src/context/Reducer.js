const Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_CART':
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case 'REMOVE_PRODUCT_CART':
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload)
      };
    default:
      return state;
  }
};

export default Reducer;
