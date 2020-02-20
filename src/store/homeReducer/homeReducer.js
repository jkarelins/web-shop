const initialState = {
  currentProducts: [],
  fetchedProducts: []
};

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case "home/FETCH_PRODUCTS": {
      // console.log("homeReducer state:", state);
      return {
        currentProducts: action.payload,
        fetchedProducts: action.payload
      };
    }
    case "home/FILTER_PRODUCTS": {
      const filteredProducts = state.fetchedProducts.filter(product => {
        return product.categoryId === Number(action.payload);
      });
      return { ...state, currentProducts: filteredProducts };
    }
    default: {
      return state;
    }
  }
}
