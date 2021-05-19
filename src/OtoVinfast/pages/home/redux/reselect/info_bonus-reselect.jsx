import { createSelector } from "reselect";

const infoBonusSelector = (state) => state.changePageReducer.dataNews;

const loadingISelector = (state) => state.changePageReducer.loading;

export const loadingInFoSelector = createSelector(
  loadingISelector,
  (item) => item
);
export const getInfoSelector = createSelector(infoBonusSelector, (item) => {
  if (item.hasOwnProperty("data_s")) {
    return item.data_s;
  }
  return [];
});
