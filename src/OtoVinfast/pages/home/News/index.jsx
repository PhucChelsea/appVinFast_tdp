import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Pagination, Card, Skeleton } from "antd";
import { changePage } from "../../home/News/actions/index";
function News() {
  const dispatch = useDispatch();
  const clickChangePage = (p) => {
    dispatch(changePage(p));
  };
  const loading = useSelector((state) => state.changePageReducer.loading);
  const data_News = useSelector((state) => state.changePageReducer.dataNews);
  if (loading) {
    return (
      <Row>
        <Col span={24}>
          <Skeleton active />
        </Col>
      </Row>
    );
  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Hành trình chinh phục thế giới</h1>
      <Row style={{ backgroundColor: "blueviolet", margin: "30px 100px" }}>
        {data_News.hasOwnProperty("results")
          ? data_News.results.map((item, index) => (
              <Col key={index} span={24}>
                <Row
                  style={{
                    margin: "20px 20px",
                    backgroundColor: "GrayText",
                  }}
                >
                  <img className="image_bg" src={item.image} alt="" />
                  <Col span={24}>
                    <Card
                      className="news_text"
                      title={item.title}
                      bordered={false}
                      style={{
                        width: 300,
                        minHeight: 400,
                        margin: "30px",
                        float: "right",
                      }}
                    >
                      <p>{item.text}</p>
                      <Pagination
                        current={item.page}
                        size="small"
                        total={50}
                        onChange={(val) => clickChangePage(val)}
                      />
                    </Card>
                  </Col>
                </Row>
              </Col>
            ))
          : null}
      </Row>
    </>
  );
}

export default News;
