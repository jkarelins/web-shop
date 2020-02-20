const initialState = null;

export default function categorieReducer(state = initialState, action) {
  switch (action.type) {
    case "sidebar/FETCH_CATEGORIES": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
