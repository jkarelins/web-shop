import React, { Component } from "react";
import { connect } from "react-redux";
import { clearCart, removeProduct } from "../../store/cartReducer/actions";

class Cart extends Component {
  componentDidMount() {}

  clearCart = () => {
    this.props.dispatch(clearCart());
  };

  removeSingleProduct = id => {
    this.props.dispatch(removeProduct(id));
  };

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
                  <li key={product.id}>
                    {product.name} / {product.amount} pc. /{product.price} ${" "}
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
              <button className="btn btn-lg btn-success">Checkout & Buy</button>
              <button
                className="btn btn-lg btn-alert ml-2"
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
