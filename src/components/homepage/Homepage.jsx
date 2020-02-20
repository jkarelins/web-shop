import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../store/homeReducer/actions";
import ProductExcerpt from "./ProductExcerpt";
import Sidebar from "../Sidebar";

class Homepage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts);
  }
  render() {
    if (!this.props.products) {
      return <div>Loadng...</div>;
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Sidebar />
            </div>
            <div className="col-9">
              <div className="row">
                {this.props.products.map(product => {
                  return (
                    <ProductExcerpt
                      key={product.id}
                      name={product.name}
                      imageUrl={product.imageUrl}
                      inStock={product.inStock}
                      id={product.id}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(reduxState) {
  return {
    products: reduxState.home.currentProducts
  };
}
export default connect(mapStateToProps)(Homepage);
