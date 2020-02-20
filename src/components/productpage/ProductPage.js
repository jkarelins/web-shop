import React, { Component } from "react";
import Header from "../header/Header";
import { connect } from "react-redux";
import getProduct from "../../store/productReducer/actions";
import { productAdded } from "../../store/cartReducer/actions";

class ProductPage extends Component {
  addToCart(product) {
    this.props.dispatch(productAdded(product));
  }
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    this.props.dispatch(getProduct(params.id));
  }
  render() {
    if (this.props.product) {
      return (
        <div>
          <Header />
          <div className="container">
            <div className="card">
              <img
                src={this.props.product.imageUrl}
                className="card-img-top image-fluid"
                style={{ maxHeight: "200px" }}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  {this.props.product.name}
                  {this.props.product.inStock ? (
                    <span className="text-success"> In Stock</span>
                  ) : (
                    <span className="text-danger"> Sorry Out Of Stock</span>
                  )}
                </h5>
                <p className="card-text">{this.props.product.price} $</p>
                {this.props.product.inStock ? (
                  <button
                    className="btn btn-primary"
                    onClick={() => this.addToCart(this.props.product)}
                  >
                    Add To Cart
                  </button>
                ) : (
                  <button className="btn btn-primary" disabled>
                    Sorry Not in Stock
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

function mapStateToProps(reduxState) {
  return {
    product: reduxState.productReducer.productToShow
  };
}

export default connect(mapStateToProps)(ProductPage);
