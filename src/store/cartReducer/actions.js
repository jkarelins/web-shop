export default function productAdded(product) {
  return {
    type: "product/ADDED",
    payload: product
  };
}
