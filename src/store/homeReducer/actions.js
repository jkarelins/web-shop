// actions.js

function productsFetched(data) {
  return {
    type: "home/FETCH_PRODUCTS",
    payload: data
  };
}

export function productsFiltered(id) {
  return {
    type: "home/FILTER_PRODUCTS",
    payload: id
  };
}

export function showFetchedProducts() {
  return {
    type: "home/ALL_PRODUCTS"
  };
}

export function fetchProducts(dispatch, getState) {
  fetch("http://localhost:4000/products")
    .then(response => response.json())
    .then(products => {
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
        dispatch(productsFetched(filteredProducts));
      });
  };
}
