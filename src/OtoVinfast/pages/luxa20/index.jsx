import React from "react";
import { Row, Col } from "antd";
import MasterLayoutVinFast from "../../components/MasterLayout";

const LuxA20Page = () => {
  return (
    <MasterLayoutVinFast>
      <Row>
        <Col span={24}>
          <h1>LuxA20Page</h1>
        </Col>
      </Row>
    </MasterLayoutVinFast>
  );
};
export default React.memo(LuxA20Page);
