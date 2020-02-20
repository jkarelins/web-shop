import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProductExcerpt extends Component {
  render() {
    return (
      <div className="col-4 mb-4">
        <div className="card">
          <img className="card-img-top" src={this.props.imageUrl} alt="Card" />
          <div className="card-body">
            <h3 className="card-title">{this.props.name}</h3>
            {/* <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p> */}
            {this.props.inStock ? (
              <p className="text-success font-weight-bold">instock!</p>
            ) : (
              <p className="text-danger font-weight-bold">not in stock</p>
            )}
            <Link to={`/product/${this.props.id}`} className="btn btn-primary">
              Go to Product
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
