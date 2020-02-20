import React, { Component } from "react";
import { connect } from "react-redux";
import { checkoutFinal } from "../../store/cartReducer/actions";

class Checkout extends Component {
  state = {
    name: "",
    phone: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  checkoutSubmitted = e => {
    e.preventDefault();
    this.props.dispatch(checkoutFinal(this.state));
  };

  render() {
    // console.log(this.props.cartInfo);
    if (this.props.cartInfo.length === 0) {
      return (
        <h1 className="text-danger">
          Sorry, your cart is empty. Choose something, and add to your cart.
        </h1>
      );
    } else {
      return (
        <div>
          <h1>Checkout Page</h1>
          <div className="d-flex justify-content-center">
            <div className="col-5">
              <form onSubmit={this.checkoutSubmitted}>
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    className="form-control"
                  ></input>
                  <label className="mt-3">Phone:</label>
                  <input
                    placeholder="e.g. +31 640 630 492"
                    value={this.state.phone}
                    name="phone"
                    onChange={this.handleChange}
                    className="form-control"
                  ></input>
                  <input
                    type="submit"
                    vlaue="ORDER"
                    className="btn btn-lg btn-success mt-3"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}

function mapPropsToState(reduxState) {
  return {
    cartInfo: reduxState.cartReducer.addedProducts
  };
}

export default connect(mapPropsToState)(Checkout);
