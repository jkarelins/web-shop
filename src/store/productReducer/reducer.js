const initialState = {
  productToShow: null
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "product/SELECTED": {
      const { product } = action.payload;
      return {
        productToShow: product
      };
    }
    default: {
      return state;
    }
  }
}
