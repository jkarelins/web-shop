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

module.exports = { productAdded, clearCart, removeProduct };
