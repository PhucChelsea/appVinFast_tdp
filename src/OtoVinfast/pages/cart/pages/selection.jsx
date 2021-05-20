import React from "react";
import LayoutShopping from "../components/layout";
import { Row, Col } from "antd";

const SelectionCart = () => {
  return (
    <LayoutShopping>
      <Row>
        <Col
          style={{
            backgroundColor: "aqua",
            minHeight: "80vh",
          }}
          xs={24}
          sm={24}
          md={24}
          lg={16}
          xl={16}
        >
          <img
            src="https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw7652ab62/images/President/hinh-anh-gia-VinFast-President-V8-mau-do-red.png"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Col>
        <Col
          style={{ backgroundColor: "green", minHeight: "80vh" }}
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
