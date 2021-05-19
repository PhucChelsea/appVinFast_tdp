import React from "react";
import { Row, Col, Card, Pagination } from "antd";
import { useDispatch } from "react-redux";
import { changePage } from "../actions/index";

const InfoNews = () => {
  const dispatch = useDispatch();

  const clickChangePage = (p) => {
    dispatch(changePage(p));
  };
  return (
    <>
      <Row
        style={{
          margin: "20px 20px",
          backgroundColor: "GrayText",
        }}
      >
        <Col span={24}>
          <Card
            className="news_text"
            title=""
            bordered={false}
            style={{
              width: 300,
              minHeight: 400,
              margin: "30px",
              float: "right",
            }}
          >
            <p></p>
            <Pagination
              current="1"
              size="small"
              total={50}
              onChange={(val) => clickChangePage(val)}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default React.memo(InfoNews);
