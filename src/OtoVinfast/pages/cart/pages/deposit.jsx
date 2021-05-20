import React from "react";
import LayoutShopping from "../components/layout";
import { Row, Col } from "antd";

const DepositCart = () => {
  return (
    <>
      <LayoutShopping>
        <Row style={{ height: "90vh" }}>
          <div style={{ textAlign: "center" }}>
            <h1>ĐỒ ÁN TỐT NGHIỆP </h1>
            <h1>ĐỀ TÀI........................................</h1>
          </div>
          <Col span={8}>
            <Row style={{ backgroundColor: "aqua" }}>
              <Col span={24}>
                <h2>THÔNG SỐ CẦU TRỤC</h2>
              </Col>
            </Row>
            <Row style={{ backgroundColor: "blue" }}>
              <Col span={24}></Col>
            </Row>
          </Col>
          <Col span={16} style={{ backgroundColor: "revert" }}></Col>
        </Row>
      </LayoutShopping>
    </>
  );
};

export default React.memo(DepositCart);
