import jwt from "jsonwebtoken";
const KEY_TOKEN = "otovinfast";

const loginUser = (user, pass) => {
  let token = null;
  if (user === "vinId" && pass === "123") {
    token = jwt.sign(
      {
        id: 1,
        username: user,
        email: "vinid@gmail.com",
        phone: "19001009",
        address: "Ha Noi",
      },
      KEY_TOKEN
    );
    return token;
  }
  return token;
};
export const api_login = {
  loginUser,
};
