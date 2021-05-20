import React from "react";
import { Row, Col, Button } from "antd";
import ListItems from "./list-items";
import * as reselect from "../reselect/product-reselect";
import { createStructuredSelector } from "reselect";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
  const { loading, products } = useSelector(
    createStructuredSelector({
      loading: reselect.loadingSelector,
      products: reselect.getProductSelector,
    })
  );
  return (
    <>
      <Row style={{ margin: "12px 0px", backgroundColor: "whitesmoke" }}>
        <Col span={24}>
          <h2 style={{ textAlign: "center", margin: "6px 0px" }}>
            Các dòng xe Vin Fast
          </h2>
        </Col>
      </Row>
      <ListItems loading={loading} data={products}  />
      <Link>
        <Button>Chi tiet</Button>
      </Link>
    </>
  );
};
export default React.memo(Products);
