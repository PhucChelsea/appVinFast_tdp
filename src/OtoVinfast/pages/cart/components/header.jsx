import React from "react";

import { Layout, Menu } from "antd";
import { NavLink, useLocation, useRouteMatch } from "react-router-dom";

const { Header } = Layout;

const HeaderShopping = () => {
  const { pathname } = useLocation();
  const { url } = useRouteMatch();
  return (
    <>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathname}>
          <Menu.Item key={`${url}#car`}>
            <NavLink to={`${url}#car`}>1.Lua chon xe</NavLink>
          </Menu.Item>
          <Menu.Item key={`${url}#deposit`}>
            <NavLink to={`${url}#deposit`}>2.Thanh Toan</NavLink>
          </Menu.Item>
          <Menu.Item key="/car-login">
            <NavLink to="/car-login">Dang nhap</NavLink>
          </Menu.Item>
        </Menu>
      </Header>
    </>
  );
};
export default React.memo(HeaderShopping);
