const initialState = {
  addedProducts: []
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "product/ADDED": {
      const product = action.payload;
      return {
        addedProducts: [...state.addedProducts, product]
      };
    }
    default: {
      return state;
    }
  }
}
