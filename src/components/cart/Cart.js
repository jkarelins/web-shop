import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  componentDidMount() {}
  render() {
    if (this.props.cartInfo) {
      console.log(this.props.cartInfo);
      return (
        <div>
          <p>{this.props.cartInfo[0]}</p>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

function mapStateToProps(reduxState) {
  return {
    cartInfo: reduxState.cartReducer
  };
}

export default connect(mapStateToProps)(Cart);
