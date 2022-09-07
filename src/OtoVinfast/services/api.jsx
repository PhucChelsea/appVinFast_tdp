import * as api from "./constant";
import axios from "axios";

export const getDataProducts = async () => {
  // const url = `${api.configApi.PROXY_API}${api.configApi.BASE_URL}${api.configApi.PRODUCT_URL}${api.configApi.NAME_P}`;
  const url ='https://api-vinfast.herokuapp.com/api/products'
  const response = await axios.get(url);
  const result = (await response.status) === 200 ? response.data : [];
  return result;
};

export const getDataTopSelling = async () => {
  const url = `${api.configApi.PROXY_API}${api.configApi.BASE_URL}${api.configApi.PRODUCT_URL}${api.configApi.NAME_T}`;
  const response = await axios.get(url);
  const result = (await response.status) === 200 ? response.data : [];
  return result;
};

export const getDataInfoBonus = async () => {
  const url = `${api.configApi.PROXY_API}${api.configApi.BASE_URL}${api.configApi.PRODUCT_URL}${api.configApi.NAME_I}`;
  const response = await axios.get(url);
  const result = (await response.status) === 200 ? response.data : [];
  return result;
};
