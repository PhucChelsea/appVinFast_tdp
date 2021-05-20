import React from "react";
import styled from "styled-components";

import { Layout, Menu } from "antd";
import { NavLink, useLocation, useRouteMatch } from "react-router-dom";
import logo from "../../home/img/logo.png";
import { helpers } from "../../../helpers/common";

const { Header } = Layout;

const StyleHeader = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const DivLogoHeader = styled.div`
  display: flex;
  width: 60px;
  height: 50px;
`;

const HeaderShopping = () => {
  const info = helpers.decodeTokenLocalStorage();
  const username = info !== null ? info["username"] : null;
  //const history = useHistory();
  // const LogoutUser = () => {
  //   helpers.removeToken();
  //   history.push("/gio-hang");
  // };
  const { pathname } = useLocation();

  const { path, url } = useRouteMatch();
  console.log("url_:", url);
  console.log("path__:", path);
  return (
    <Header>
      <StyleHeader>
        <NavLink to="/">
          <DivLogoHeader>
            <img src={logo} alt="logo" />
          </DivLogoHeader>
        </NavLink>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathname}>
          <Menu.Item key='/gio-hang/car'>
            <NavLink to='/gio-hang/car'>1.Lua chon xe</NavLink>
          </Menu.Item>
          <Menu.Item key='/gio-hang/deposit'>
            <NavLink to='/gio-hang/deposit'>2.Thanh Toan</NavLink>
          </Menu.Item>
          {info === null && (
            <Menu.Item key="/car-login">
              <NavLink to="/car-login">Dang nhap</NavLink>
            </Menu.Item>
          )}
          {info !== null && (
            <Menu.Item>
              <span>Hi: {username}</span>
            </Menu.Item>
          )}

          {/* {info !== null && (
            <Menu.Item onClick={() => LogoutUser}>
              <NavLink to="/car-login">Logout</NavLink>
            </Menu.Item>
          )} */}
        </Menu>
      </StyleHeader>
    </Header>
  );
};
export default React.memo(HeaderShopping);
