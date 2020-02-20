function productAdded(product) {
  return {
    type: "product/ADDED",
    payload: product
  };
}

function clearCart() {
  return {
    type: "cart/CLEAR"
  };
}

function removeProduct(id) {
  return {
    type: "product/REMOVE",
    payload: id
  };
}

function lessProducts(id) {
  return {
    type: "product/LESS",
    payload: id
  };
}

function moreProducts(id) {
  return {
    type: "product/MORE",
    payload: id
  };
}

function checkoutFinal(state) {
  return {
    type: "cart/CLOSE",
    payload: state
  };
}

module.exports = {
  productAdded,
  clearCart,
  removeProduct,
  lessProducts,
  moreProducts,
  checkoutFinal
};
