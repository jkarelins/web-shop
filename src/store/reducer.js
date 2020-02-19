import { combineReducers } from "redux";
import cartReducer from "./cartReducer/reducer";
import productReducer from "./productReducer/reducer";
import homeReducer from "./homeReducer/homeReducer";

export default combineReducers({
  cartReducer,
  productReducer,
  home: homeReducer
});
