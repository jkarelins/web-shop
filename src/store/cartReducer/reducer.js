const initialState = {
  addedProducts: []
  // should be {product}  && product.amount = 1
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "product/ADDED": {
      let product = action.payload;
      let foundInArr = false;
      if (state.addedProducts.length !== 0) {
        state.addedProducts.forEach(productFromArr => {
          if (productFromArr.id === product.id) {
            foundInArr = true;
          }
        });
      }

      if (state.addedProducts.length === 0) {
        product.amount = 1;
        return {
          addedProducts: [...state.addedProducts, product]
        };
      } else if (foundInArr) {
        const newArr = [...state.addedProducts].map(productFromArr => {
          if (productFromArr.id === product.id) {
            return { ...productFromArr, amount: productFromArr.amount + 1 };
          } else {
            return productFromArr;
          }
        });
        return {
          addedProducts: newArr
        };
      } else {
        product.amount = 1;
        return {
          addedProducts: [...state.addedProducts, product]
        };
      }
    }
    case "cart/CLEAR": {
      return {
        addedProducts: []
      };
    }
    case "product/REMOVE": {
      let productId = action.payload;
      const customizedArr = [...state.addedProducts]
        .map(productObj => {
          if (productObj.id === productId) {
            return null;
          } else {
            return productObj;
          }
        })
        .filter(productObj => productObj != null);

      return {
        addedProducts: customizedArr
      };
    }
    default: {
      return state;
    }
  }
}

// addedProducts: [{ product: {}, amount: 0 }]
