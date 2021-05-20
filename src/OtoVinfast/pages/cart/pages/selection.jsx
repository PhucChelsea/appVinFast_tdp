import React from "react";
import LayoutShopping from "../components/layout";
import { Row, Col } from "antd";

const SelectionCart = () => {
  return (
    <LayoutShopping>
      <Row>
        <Col
          style={{ backgroundColor: "aqua", height: "100px" }}
          xs={24}
          sm={24}
          md={24}
          lg={16}
          xl={16}
        ></Col>
        <Col
          style={{ backgroundColor: "green", height: "100px" }}
          xs={24}
          sm={24}
          md={24}
          lg={8}
          xl={8}
        ></Col>
      </Row>
    </LayoutShopping>
  );
};

export default React.memo(SelectionCart);
