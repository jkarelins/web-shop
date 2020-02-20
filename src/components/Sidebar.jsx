// Sidebar.jsx
import React from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../store/categorieReducer/categorieActions";
import { productsFiltered } from "../store/homeReducer/actions";

class Sidebar extends React.Component {
  filterProductsByCategorie = id => {
    this.props.dispatch(productsFiltered(id));
  };

  showAllProducts = () => {
    this.props.dispatch({ type: "home/ALL_PRODUCTS" });
  };

  componentDidMount() {
    this.props.dispatch(fetchCategories);
  }
  render() {
    if (!this.props.categories) {
      return <div>Loading categories</div>;
    } else {
      return (
        <div className="list-group">
          <button
            type="button"
            className="list-group-item list-group-item-action"
            onClick={this.showAllProducts}
          >
            All Products
          </button>
          {this.props.categories.map(categorie => {
            return (
              // <li  className="list-group-item">
              <button
                key={categorie.id}
                type="button"
                className="list-group-item list-group-item-action"
                onClick={() => this.filterProductsByCategorie(categorie.id)}
              >
                {categorie.name}
              </button>
              // </li>
            );
          })}
        </div>
      );
    }
  }
}

// 1 Create component, import export and show on page
// 2 Connect to Redux with Rein steps
// - create reducer in store
// - import and combine reducer in rootReducer
// - mapStateTopProps and connect to decide which state you want from the store

function mapStateTopProps(reduxState) {
  return {
    categories: reduxState.categories
  };
}
export default connect(mapStateTopProps)(Sidebar);
