import jwt from "jsonwebtoken";
const KEY_TOKEN = "otovinfast";

const saveToken = (token) => {
  if (token !== null && token !== "") {
    //luu vao local Storage
    localStorage.setItem("token_login_user", token);
  }
};

const removeToken = () => {
  localStorage.removeItem("token_login_user");
};

const getTokenLocalStorage = () => {
  const token = localStorage.getItem("token_login_user");
  return token;
};
const decodeTokenLocalStorage = () => {
  let token = getTokenLocalStorage();
  let decodeToken = null;
  if (token !== null && token !== "") {
    decodeToken = jwt.verify(token, KEY_TOKEN);
    if (decodeToken !== null && decodeToken !== "") {
      return decodeToken;
    }
    return null;
  }
  return decodeToken;
};
const isEmptyObject = (obj) => {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return JSON.stringify(obj) === JSON.stringify({});
};
const isAuthenticated = () => {
  let token = decodeTokenLocalStorage();
  if (token !== null && token !== "") {
    return true;
  }
  return false;
};

export const helpers = {
  isAuthenticated,
  saveToken,
  removeToken,
  decodeTokenLocalStorage,
  isEmptyObject,
};
