import { combineReducers } from "redux";
import cartReducer from "./cartReducer/reducer";
import productReducer from "./productReducer/reducer";

export default combineReducers({
  cartReducer,
  productReducer
});
