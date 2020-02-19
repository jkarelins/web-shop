import { combineReducers } from "redux";
import cartReducer from "./cartReducer/reducer";
import homeReducer from "./homeReducer/homeReducer";

export default combineReducers({
  cartReducer,
  home: homeReducer
});
