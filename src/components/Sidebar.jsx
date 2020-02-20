import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategories } from "../store/categorieReducer/categorieActions";

class Sidebar extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCategories);
  }
  render() {
    if (!this.props.categories) {
      return <div>Loading categories</div>;
    } else {
      return (
        <ul className="list-group">
          {this.props.categories.map(categorie => {
            return (
              <li key={categorie.id} className="list-group-item">
                <Link to={`/${categorie.id}`}>{categorie.name}</Link>
              </li>
            );
          })}
        </ul>
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
