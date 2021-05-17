import { put, call, takeLatest } from "redux-saga/effects";
import * as types from "../actions/types";
import * as actions from "../actions/index";

import * as api from "../api";

function* changePageSaga({ pageNews }) {
  try {
    const data = yield call(api.changePageApi, pageNews);
    if (data.results.length > 0) {
      yield put(actions.changePageSuccess(data));
    } else {
      yield put(
        actions.changePageFail({
          code: 404,
          message: "not found data",
        })
      );
    }
  } catch (err) {
    yield put(actions.changePageFail(err));
  }
}

// theo doi action

export default function* watchChangePage() {
  yield takeLatest(types.CHANGE_PAGE, changePageSaga);
}
