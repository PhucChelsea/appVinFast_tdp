import React from "react";

import { Layout } from "antd";
import HeaderShopping from "./header";
import FooterShopping from "./footer";
import PropTypes from "prop-types";
import "./css/layout.css";
const { Header, Footer, Content } = Layout;

const LayoutShopping = (props) => {
  return (
    <Layout>
      <Header>
        <HeaderShopping />
      </Header>
      <Layout>
        <Content>{props.children}</Content>
      </Layout>
      <Footer>
        <FooterShopping />
      </Footer>
    </Layout>
  );
};
LayoutShopping.propTypes = {
  children: PropTypes.node.isRequired,
};
export default React.memo(LayoutShopping);
