import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Homepage extends Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
        <nav className="navbar navbar-expand-lg">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              {this.props.inCart === 0 ? (
                <Link to="/cart" className="nav-link">
                  Cart {this.props.inCart}
                </Link>
              ) : (
                <button type="button" className="btn btn-primary">
                  <Link
                    to="/cart"
                    className="text-light"
                    style={{ textDecoration: "none" }}
                  >
                    Cart{" "}
                    <span className="badge badge-light">
                      {this.props.inCart}
                    </span>
                  </Link>
                </button>
              )}
            </li>
            <li className="nav-item">
              <Link to="/checkout" className="nav-link">
                Checkout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

function mapPropsToState({ cartReducer }) {
  return {
    inCart: cartReducer.addedProducts.reduce((acc, cur) => acc + cur.amount, 0)
  };
}

export default connect(mapPropsToState)(Homepage);
