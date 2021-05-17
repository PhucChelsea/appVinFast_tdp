import { all, call } from "redux-saga/effects";

import { watchGetDataSaga } from "../pages/home/redux/saga/product-saga";
import watchChangePage from "../pages/home/News/saga/change_page-saga";
export default function* rootSaga() {
  yield all([call(watchGetDataSaga), call(watchChangePage)]);
}
