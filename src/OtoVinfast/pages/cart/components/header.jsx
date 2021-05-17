import React from "react";
import styled from "styled-components";

import { Layout, Menu } from "antd";
import { NavLink, useLocation, useRouteMatch } from "react-router-dom";
import logo from "../../home/img/logo.png";

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
  const { pathname } = useLocation();
  const { url } = useRouteMatch();
  return (
    <Header>
      <StyleHeader>
        <NavLink to="/">
          <DivLogoHeader>
            <img src={logo} alt="logo" />
          </DivLogoHeader>
        </NavLink>
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
      </StyleHeader>
    </Header>
  );
};
export default React.memo(HeaderShopping);
