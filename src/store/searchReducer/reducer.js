const initialState = {
  searchReq: ""
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "search/NEW": {
      return { searchReq: action.payload };
    }
    default: {
      return state;
    }
  }
}
