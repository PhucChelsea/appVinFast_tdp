import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterVinFast = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      VinFast ©2022 Created by TDP
    </Footer>
  );
};
export default React.memo(FooterVinFast);
