import React from "react";
import HeaderVinFast from "./HeaderComponent";
import FooterVinFast from "./FooterComponent";
import { Layout } from "antd";
import styled from "styled-components";
import PropTypes from "prop-types";

const DivSiteConTent = styled.div`
  min-height: 680px;
  padding: 10px;
  background: #fff;
`;
const { Content } = Layout;
const MasterLayoutVinFast = (props) => {
  return (
    <Layout>
      <HeaderVinFast />
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <DivSiteConTent>{props.children}</DivSiteConTent>
      </Content>
      <FooterVinFast />
    </Layout>
  );
};
MasterLayoutVinFast.propTypes = {
  children: PropTypes.node.isRequired,
};
export default React.memo(MasterLayoutVinFast);