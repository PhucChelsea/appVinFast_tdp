import { all, call } from "redux-saga/effects";

import { watchGetDataSaga } from "../pages/home/redux/saga/product-saga";

export default function* rootSaga() {
  yield all([call(watchGetDataSaga)]);
}
