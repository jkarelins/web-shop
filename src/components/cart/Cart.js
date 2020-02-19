import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  componentDidMount() {}
  render() {
    if (this.props.cartInfo) {
      console.log(this.props.totalToPay);
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
                    {product.name} / {product.amount} pc. /{product.price} $
                  </li>
                );
              })}
            </ul>
            Total to pay: {this.props.totalToPay} $
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
