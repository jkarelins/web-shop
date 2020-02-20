import { combineReducers } from "redux";
import cartReducer from "./cartReducer/reducer";
import productReducer from "./productReducer/reducer";
import homeReducer from "./homeReducer/homeReducer";
import categorieReducer from "./categorieReducer/categorieReducer";

export default combineReducers({
  cartReducer,
  productReducer,
  home: homeReducer,
  categories: categorieReducer
});
