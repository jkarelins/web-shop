import React, { Component } from "react";
import { connect } from "react-redux";

class ClosedOrders extends Component {
  render() {
    if (this.props.orders.length !== 0) {
      return (
        <div>
          Completed Orders
          {this.props.orders.map(order => {
            return (
              <div className="card">
                <div class="card-body">
                  <h5 class="card-title">
                    {order.user.name} = {order.user.phone}
                  </h5>
                  {order.cart.map(product => (
                    <p>
                      {product.name} / x{product.amount} / {product.price} $/pc.
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div>
          <h1 className="text-danger">
            Sorry, NO ORDERS YET! Make better marketing! =(
          </h1>
        </div>
      );
    }
  }
}

function mapPropstoState(reduxState) {
  return {
    orders: reduxState.cartReducer.completedOrders
  };
}

export default connect(mapPropstoState)(ClosedOrders);
