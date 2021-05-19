import * as types from "./types";

export const getData = () => ({
  type: types.GET_DATA_PRODUCTS,
});

export const startGetData = (loading) => ({
  type: types.START_GET_DATA,
  loading,
});
export const stopGetData = (loading) => ({
  type: types.STOP_GET_DATA,
  loading,
});
export const getDataSuccess = (_product) => ({
  type: types.GET_DATA_SUCCESS,
  _product,
});
export const getDataFail = (error) => ({
  type: types.GET_DATA_FAIL,
  error,
});
