import React from "react";
import { Row, Col } from "antd";
import MasterLayoutVinFast from "../../components/MasterLayout";

const PresidentPage = () => {
  return (
    <MasterLayoutVinFast>
      <Row>
        <Col span={24}>
          <h1>PresidentPage</h1>
        </Col>
      </Row>
    </MasterLayoutVinFast>
  );
};
export default React.memo(PresidentPage);
