import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../store/homeReducer/actions";
import ProductExcerpt from "../homepage/ProductExcerpt";
import Sidebar from "../Sidebar";

class SearchPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts);
  }
  componentDidUpdate() {
    // this.props.dispatch(fetchProducts);
  }
  render() {
    if (!this.props.products && !this.props.search) {
      return <div>Loadng...</div>;
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-2">
              <Sidebar />
            </div>
            <div className="col-10">
              <div className="row">
                {this.props.products
                  .filter(product => {
                    if (this.props.search) {
                      return product.name.includes(this.props.search);
                    } else {
                      return true;
                    }
                  })
                  .map(product => {
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
  console.log(reduxState);
  return {
    search: reduxState.searchReducer.searchReq,
    products: reduxState.home.currentProducts
  };
}
export default connect(mapStateToProps)(SearchPage);
