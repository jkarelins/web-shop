import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import newSearchReq from "../store/searchReducer/actions";

class Header extends Component {
  state = {
    search: ""
  };

  handleSearch = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  newSearch = e => {
    e.preventDefault();
    // console.log(this.state.search);
    this.props.dispatch(newSearchReq(this.state.search));
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg  justify-content-between">
        <Link className="navbar-brand" to="/">
          Web Shop
        </Link>
        <ul className="navbar-nav ">
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
                  <span className="badge badge-light">{this.props.inCart}</span>
                </Link>
              </button>
            )}
          </li>
          <li className="nav-item">
            <Link to="/checkout" className="nav-link">
              Checkout
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/orders" className="nav-link">
              Orders
            </Link>
          </li>
          <form className="form-inline my-2 my-lg-0" onSubmit={this.newSearch}>
            <input
              name="search"
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={this.handleSearch}
              value={this.state.search}
            />
            <input
              type="submit"
              className="btn btn-outline-success my-2 my-sm-0"
              value="Search"
            />
          </form>
        </ul>
      </nav>
    );
  }
}

function mapPropsToState({ cartReducer }) {
  return {
    inCart: cartReducer.addedProducts.reduce((acc, cur) => acc + cur.amount, 0)
  };
}

export default connect(mapPropsToState)(Header);
