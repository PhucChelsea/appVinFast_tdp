import React from "react";

import { Layout } from "antd";
import HeaderShopping from "./header";
import FooterShopping from "./footer";
import PropTypes from "prop-types";
import "./css/layout.css";
const { Content } = Layout;

const LayoutShopping = (props) => {
  return (
    <Layout>
      <HeaderShopping />
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">{props.children}</div>
      </Content>
      <FooterShopping />
    </Layout>
  );
};
LayoutShopping.propTypes = {
  children: PropTypes.node.isRequired,
};
export default React.memo(LayoutShopping);
