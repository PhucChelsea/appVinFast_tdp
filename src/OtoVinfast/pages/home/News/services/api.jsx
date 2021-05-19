import * as api from "./constant";
import axios from "axios";

export const getDataProducts = async () => {
  // const url = `https://t3h-edu.herokuapp.com/api/learning/v1/products`;
  const url = `${api.configApi.PROXY_API}${api.configApi.BASE_URL}${api.configApi.PRODUCT_URL}`;
  const response = await axios.get(url);
  const result = (await response.status) === 200 ? response.data : [];
  return result;
};
