import axios from "axios";

export const changePageApi = async (page) => {
  const url = ``;
  const response = await axios.get(url);
  const result = (await response.status) === 200 ? response.data : [];
  return result;
};
