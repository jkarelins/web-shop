const initialState = [];

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case "home/FETCH_PRODUCTS": {
      // console.log("homeReducer state:", state);
      return (state = action.payload);
    }
    default: {
      return state;
    }
  }
}
