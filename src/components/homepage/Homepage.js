import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../store/homeReducer/actions";
import ProductExcerpt from "./ProductExcerpt";

class Homepage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts);
  }
  render() {
    if (!this.props.products) {
      return <div>Loadng...</div>;
    } else {
      return (
        <div>
          <h1>Just Homepage</h1>
          <p>It's loaded</p>
          <div className="container">
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
      );
    }
  }
}

function mapStateToProps(reduxState) {
  // console.log("mapStateToProps => return state:", reduxState);
  // console.log("mapStateToProps => return state.home:", reduxState.home);
  return {
    products: reduxState.home
  };
}
export default connect(mapStateToProps)(Homepage);
