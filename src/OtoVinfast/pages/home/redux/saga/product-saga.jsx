import { put, call, takeEvery } from "redux-saga/effects";
import * as actions from "../actions/index";
import * as types from "../actions/types";
import * as api from "../../../../services/api";

function* getDataSaga() {
  try {
    yield put(actions.startGetData(true));
    const data = yield call(api.getDataProducts);
    if (data) {
      yield put(actions.getDataSuccess(data));
    } else {
      yield put(
        actions.getDataFail({
          cod: 404,
          massage: "not found data",
        })
      );
    }
    yield put(actions.stopGetData(false));
  } catch (err) {
    yield put(actions.getDataFail(err));
  }
}

export function* watchGetDataSaga() {
  yield takeEvery(types.GET_DATA_PRODUCTS, getDataSaga);
}
