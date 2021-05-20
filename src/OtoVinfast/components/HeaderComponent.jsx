import {
  LogoutOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { helpers } from "../helpers/common";
import logo from "../pages/home/img/logo.png";

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
const HeaderVinFast = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  // console.log("pathname_:", pathname);
  const info = helpers.decodeTokenLocalStorage();
  const username = info !== null ? info.phone : null;
  const LogoutUser = () => {
    helpers.removeToken();
    history.push("/");
  };

  return (
    <Header>
      <StyleHeader>
        <Link to="/">
          <DivLogoHeader>
            <img src={logo} alt="logo" />
          </DivLogoHeader>
        </Link>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathname}>
          <Menu.Item key="/car-home">
            <Link to="/car-home">Home</Link>
          </Menu.Item>
          <Menu.Item key="/car-president">
            <Link to="/car-president">President</Link>
          </Menu.Item>
          <Menu.Item key="/car-luxa20">
            <Link to="/car-luxa20">LuxA 2.0</Link>
          </Menu.Item>
          <Menu.Item key="/car-luxsa20">
            <Link to="/car-luxsa20">LuxSA 2.0</Link>
          </Menu.Item>
          <Menu.Item key="/car-fadil">
            <Link to="/car-fadil">Fadil</Link>
          </Menu.Item>
          {info === null && (
            <Menu.Item key="/car-login">
              <Link to="/car-login">
                <UserOutlined />
              </Link>
            </Menu.Item>
          )}
          {info !== null && (
            <Menu.Item>
              <span>Hi: {username} </span>
            </Menu.Item>
          )}

          <Menu.Item key="/gio-hang">
            <Link to="/gio-hang">
              <ShoppingCartOutlined />
            </Link>
          </Menu.Item>
          {info !== null && (
            <Menu.Item onClick={() => LogoutUser()}>
              <LogoutOutlined />
            </Menu.Item>
          )}
        </Menu>
      </StyleHeader>
    </Header>
  );
};

export default React.memo(HeaderVinFast);
