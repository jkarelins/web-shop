const initialState = {
  addedProducts: [],
  completedOrders: []
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
          addedProducts: [...state.addedProducts, product],
          completedOrders: state.completedOrders
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
          addedProducts: newArr,
          completedOrders: state.completedOrders
        };
      } else {
        product.amount = 1;
        return {
          addedProducts: [...state.addedProducts, product],
          completedOrders: state.completedOrders
        };
      }
    }
    case "cart/CLEAR": {
      // remove all products from cart
      return {
        addedProducts: [],
        completedOrders: state.completedOrders
      };
    }
    case "product/REMOVE": {
      // Remove single product from cart
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
        addedProducts: customizedArr,
        completedOrders: state.completedOrders
      };
    }
    case "product/LESS": {
      // Make -1 of single product into cart
      let productId = action.payload;
      const customizedArr = [...state.addedProducts]
        .map(productObj => {
          if (productObj.id === productId) {
            return { ...productObj, amount: productObj.amount - 1 };
          } else {
            return productObj;
          }
        })
        .filter(productObj => productObj.amount >= 1);
      return {
        addedProducts: customizedArr,
        completedOrders: state.completedOrders
      };
    }
    case "product/MORE": {
      // Make +1 of single product into cart
      let productId = action.payload;
      const customizedArr = [...state.addedProducts]
        .map(productObj => {
          if (productObj.id === productId) {
            return { ...productObj, amount: productObj.amount + 1 };
          } else {
            return productObj;
          }
        })
        .filter(productObj => productObj.amount >= 1);
      return {
        addedProducts: customizedArr,
        completedOrders: state.completedOrders
      };
    }
    case "cart/CLOSE": {
      const user = action.payload;
      const newOrder = { cart: state.addedProducts, user };
      const customizedArr = [...state.completedOrders, newOrder];
      console.log("user received: ", customizedArr);

      return {
        addedProducts: [],
        completedOrders: customizedArr
      };
    }
    default: {
      return state;
    }
  }
}

// addedProducts: [{ product: {}, amount: 0 }]
