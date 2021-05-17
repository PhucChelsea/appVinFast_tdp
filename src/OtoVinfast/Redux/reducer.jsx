import { combineReducers } from "redux";
import { productReducer } from "../pages/home/redux/reducers/product-reducer";
import { changePageReducer } from "../pages/home/News/reducer/change_page-reducer";
const rootReducer = combineReducers({
  productReducer,
  changePageReducer,
});
export default rootReducer;
