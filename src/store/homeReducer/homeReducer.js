const initialState = [];

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case "home/FETCH_PRODUCTS": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
