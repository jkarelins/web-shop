export default function getProduct(id) {
  return function thunk(dispatch, getState) {
    fetch(`http://localhost:4000/products/${id}`)
      .then(data => data.json())
      .then(product => {
        // console.log(product);
        dispatch(productFetched(product));
      })
      .catch(err => console.log("err", err));
  };
}

function productFetched(product) {
  return {
    type: "product/SELECTED",
    payload: {
      product
    }
  };
}
