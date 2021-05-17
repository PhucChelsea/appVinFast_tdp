import * as types from "../actions/types";

const initState = {
  loading: false,
  dataNews: [],
  error: null,
};
export const changePageReducer = (state = initState, action) => {
  switch (action.type) {
    case types.CHANGE_PAGE_SUCCESS:
      return {
        ...state,

        dataNews: action.infoNews,
        error: null,
      };
    case types.CHANGE_PAGE_FAIL:
      return {
        ...state,
        error: action.error,

        dataNews: null,
      };
    default:
      return state;
  }
};
