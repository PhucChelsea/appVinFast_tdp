import jwt from "jsonwebtoken";
const KEY_TOKENN = "vinfast2021";

const saveTokenn = (tokenn) => {
  if (tokenn !== null && tokenn !== "") {
    //luu vao local Storage
    localStorage.setItem("tokenn_login", tokenn);
  }
};

const removeTokenn = () => {
  localStorage.removeItem("tokenn_login");
};

const getTokennLocalStorage = () => {
  const tokenn = localStorage.getItem("tokenn_login");
  return tokenn;
};
const decodeTokennLocalStorage = () => {
  let tokenn = getTokennLocalStorage();
  let decodeTokenn = null;
  if (tokenn !== null && tokenn !== "") {
    decodeTokenn = jwt.verify(tokenn, KEY_TOKENN);
    if (decodeTokenn !== null && decodeTokenn !== "") {
      return decodeTokenn;
    }
    return null;
  }
  return decodeTokenn;
};

const isAuthenticated = () => {
  let token = decodeTokennLocalStorage();
  if (token !== null && token !== "") {
    return true;
  }
  return false;
};

export const helpers = {
  isAuthenticated,
  saveTokenn,
  removeTokenn,
  decodeTokennLocalStorage,
};
