import { createSelector } from "reselect";

const productSelector = (state) => state.productReducer.dataProduct;

const loadingPdSelector = (state) => state.productReducer.loadingPd;

export const loadingSelector = createSelector(
  loadingPdSelector,
  (item) => item
);
export const getProductSelector = createSelector(productSelector, (item) => {
  if (item.hasOwnProperty("data_s")) {
    return item.data_s;
  }
  return [];
});
export const getLatestSelector = createSelector(productSelector, (item) => {
  if (item.hasOwnProperty("latest")) {
    return item.latest;
  }
  return [];
});
export const getTopSellingSelector = createSelector(productSelector, (item) => {
  if (item.hasOwnProperty("data_s.text")) {
    return item.data_s;
  }
  return [];
});
