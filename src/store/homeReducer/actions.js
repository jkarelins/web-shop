// actions.js

function productsFetched(data) {
  return {
    type: "home/FETCH_PRODUCTS",
    payload: data
  };
}

export function fetchProducts(dispatch, getState) {
  fetch("http://localhost:4000/products")
    .then(response => response.json())
    .then(products => {
      console.log("products", products);
      dispatch(productsFetched(products));
    });
}
