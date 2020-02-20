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
      console.log("actions: fetch products", products);
      dispatch(productsFetched(products));
    });
}

export function fetchProductsByCategorie(id) {
  return function thunk(dispatch, getState) {
    fetch("http://localhost:4000/products")
      .then(response => response.json())
      .then(products => {
        const filteredProducts = products.filter(product => {
          return product.categoryId === Number(id);
        });
        console.log("filtering:?", filteredProducts);

        dispatch(productsFetched(filteredProducts));
      });
  };
}
