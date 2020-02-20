// categorieActions.js

function categoriesFetched(data) {
  return {
    type: "sidebar/FETCH_CATEGORIES",
    payload: data
  };
}

export function fetchCategories(dispatch, getState) {
  fetch("http://localhost:4000/categories")
    .then(response => response.json())
    .then(categories => {
      dispatch(categoriesFetched(categories));
    });
}
