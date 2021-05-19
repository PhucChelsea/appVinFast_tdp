import * as types from "./types";

// dinh nghia action

export const changePage = (pNews) => ({
  type: types.CHANGE_PAGE,
  pNews,
});

//dinh nghia action cua redux saga
export const changePageSuccess = (infoNews) => ({
  type: types.CHANGE_PAGE_SUCCESS,
  infoNews,
});
export const changePageFail = (error) => ({
  type: types.CHANGE_PAGE_FAIL,
  error,
});
