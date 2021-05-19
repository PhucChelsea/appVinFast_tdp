import { put, call, takeEvery } from "redux-saga/effects";
import * as types from "../actions/types";
import * as actions from "../actions/index";

import * as api from "../../../../services/api";

function* changePageSaga() {
  try {
    const data = yield call(api.getDataInfoBonus);
    if (data.data_s.length > 0) {
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
  yield takeEvery(types.CHANGE_PAGE, changePageSaga);
}
