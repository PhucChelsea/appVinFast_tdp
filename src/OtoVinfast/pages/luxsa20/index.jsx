import React from "react";
import { Row, Col } from "antd";
import MasterLayoutVinFast from "../../components/MasterLayout";

const LuxSA20Page = () => {
  return (
    <MasterLayoutVinFast>
      <Row>
        <Col span={24}>
          <h1>LuxSA20Page</h1>
        </Col>
      </Row>
    </MasterLayoutVinFast>
  );
};
export default React.memo(LuxSA20Page);
