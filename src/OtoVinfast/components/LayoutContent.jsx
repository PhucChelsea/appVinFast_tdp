import React from "react";
import { Row, Col } from "antd";

const LayoutContentPage = () => {
  return (
    <div style={{ backgroundColor: "blanchedalmond" }}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          span={24}
          style={{ height: "30vh", backgroundColor: "blue" }}
        ></Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          span={24}
          style={{ height: "30vh", backgroundColor: "aqua" }}
        ></Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          style={{ height: "30vh", backgroundColor: "white" }}
        ></Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          style={{ height: "30vh", backgroundColor: "#ccc" }}
        ></Col>
      </Row>
    </div>
  );
};
export default React.memo(LayoutContentPage);
