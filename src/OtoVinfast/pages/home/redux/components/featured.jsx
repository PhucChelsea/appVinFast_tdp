import React from "react";
import { Row, Col } from "antd";
import ListItems from "./list-items";
import * as reselect from "../reselect/product-reselect";
import { createStructuredSelector } from "reselect";
import { useSelector } from "react-redux";

const Products = () => {
  const { loading, products } = useSelector(
    createStructuredSelector({
      loading: reselect.loadingSelector,
      products: reselect.getProductSelector,
    })
  );
  return (
    <>
      <Row style={{ margin: "12px 0px" }}>
        <Col span={24}>
          <h2 style={{ textAlign: "center", margin: "6px 0px" }}>Caác dòng xe Vin Fast</h2>
        </Col>
      </Row>
      <ListItems loading={loading} data={products} />
    </>
  );
};
export default React.memo(Products);
