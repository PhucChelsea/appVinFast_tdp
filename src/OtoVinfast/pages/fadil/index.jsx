import React from "react";
import { Row, Col } from "antd";
import MasterLayoutVinFast from "../../components/MasterLayout";

const FadilPage = () => {
  return (
    <MasterLayoutVinFast>
      <Row>
        <Col span={24}>
          <h1>FadilPage</h1>
        </Col>
      </Row>
    </MasterLayoutVinFast>
  );
};
export default React.memo(FadilPage);
