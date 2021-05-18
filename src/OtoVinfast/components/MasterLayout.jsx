import React from "react";
import HeaderVinFast from "./HeaderComponent";
import FooterVinFast from "./FooterComponent";
import { Layout, BackTop } from "antd";
import PropTypes from "prop-types";

const { Header, Footer, Content } = Layout;
const style = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#1088e9",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};
const MasterLayoutVinFast = (props) => {
  return (
    <Layout>
      <Header>
        <HeaderVinFast />
      </Header>

      <Layout>
        <Content>{props.children}</Content>
      </Layout>

      <Footer>
        <FooterVinFast />
      </Footer>
      <BackTop>
        <div style={style}>UP</div>
      </BackTop>
    </Layout>
  );
};
MasterLayoutVinFast.propTypes = {
  children: PropTypes.node.isRequired,
};
export default React.memo(MasterLayoutVinFast);
