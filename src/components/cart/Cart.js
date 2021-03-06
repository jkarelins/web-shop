import React, { Component } from "react";
import { connect } from "react-redux";
import {
  clearCart,
  removeProduct,
  lessProducts,
  moreProducts
  // goToCheckout
} from "../../store/cartReducer/actions";
import { Link } from "react-router-dom";

class Cart extends Component {
  componentDidMount() {}

  clearCart = () => {
    this.props.dispatch(clearCart());
  };

  removeSingleProduct = id => {
    this.props.dispatch(removeProduct(id));
  };

  productLess = id => {
    this.props.dispatch(lessProducts(id));
  };

  productMore = id => {
    this.props.dispatch(moreProducts(id));
  };

  // checkout = () => {
  //   // this.props.dispatch(goToCheckout());
  // };

  render() {
    if (this.props.cartInfo) {
      // console.log(this.props.totalToPay);
      if (this.props.cartInfo.length === 0) {
        // If cart is empty
        return (
          <div>
            <h1>Your cart is empty.</h1>
          </div>
        );
      } else {
        // If cart is not empty
        return (
          <div>
            <h1>Your current cart</h1>
            <ul>
              {this.props.cartInfo.map(product => {
                return (
                  <li key={product.id} className="mb-2">
                    {product.name} /{" "}
                    <button
                      className="btn btn-sm btn-warning mx-2"
                      onClick={() => this.productLess(product.id)}
                    >
                      -
                    </button>
                    {product.amount}
                    <button
                      className="btn btn-sm btn-success mx-2"
                      onClick={() => this.productMore(product.id)}
                    >
                      +
                    </button>{" "}
                    /{product.price} ${" "}
                    <button
                      className="btn btn-sm btn-danger ml-3"
                      onClick={() => this.removeSingleProduct(product.id)}
                    >
                      Remove
                    </button>
                  </li>
                );
              })}
            </ul>
            Total to pay: {this.props.totalToPay} $
            <div className="mt-3">
              <Link to="/checkout">
                <button
                  className="btn btn-lg btn-success"
                  onClick={this.checkout}
                >
                  Checkout & Buy
                </button>
              </Link>

              <button
                className="btn btn-lg btn-warning ml-2"
                onClick={this.clearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>
        );
      }
    } else {
      return <div>Loading...</div>;
    }
  }
}

function mapStateToProps(reduxState) {
  return {
    cartInfo: reduxState.cartReducer.addedProducts,
    totalToPay: reduxState.cartReducer.addedProducts.reduce(
      (acc, cur) => acc + cur.amount * cur.price,
      0
    )
  };
}

export default connect(mapStateToProps)(Cart);
