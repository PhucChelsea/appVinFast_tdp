import React from "react";
import { Row, Col } from "antd";
import BannerHome from "./Banner/index";
import ProductHome from "./Products/index";
import NewsHome from "./News/index";

import MasterLayoutVinFast from "../../components/MasterLayout";

const HomePage = () => {
  return (
    <MasterLayoutVinFast>
      <Row style={{ backgroundColor: "#CCC" }}>
        <Col span={24}>
          <BannerHome />
        </Col>
        <Col span={24}>
          <ProductHome />
        </Col>
        <Col span={24}>
          <NewsHome />
        </Col>
      </Row>
    </MasterLayoutVinFast>
  );
};
export default React.memo(HomePage);
