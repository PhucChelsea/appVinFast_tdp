import React from "react";
import { Row, Col } from "antd";
const BgNews = () => {
  return (
    <Row>
      <Col
        span={24}
        style={{
          backgroundColor: "red",
          height: "50vh",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          className="image_bg"
          src="https://storage.googleapis.com/vinfast-data-01/Rectangle%206188.png"
          alt=""
        />
      </Col>
    </Row>
  );
};
export default React.memo(BgNews);
