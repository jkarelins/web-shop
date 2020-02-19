const initialState = {
  selectedProducts: null
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "product/SELECTED": {
      return {
        selectedProducts: state
      };
    }
    default: {
      return state;
    }
  }
}
