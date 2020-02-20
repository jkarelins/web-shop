import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProductsByCategorie } from "../store/homeReducer/actions";
import ProductExcerpt from "./homepage/ProductExcerpt";
import Sidebar from "./Sidebar";

class CategoriePage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProductsByCategorie(this.props.match.params.id));
  }
  componentDidUpdate() {
    this.props.dispatch(fetchProductsByCategorie(this.props.match.params.id));
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
    products: reduxState.home
  };
}
export default connect(mapStateToProps)(CategoriePage);
