import React from "react";
import { Row, Col, Card, Pagination } from "antd";
import { useDispatch } from "react-redux";
import { changePage } from "../actions/index";
const { Meta } = Card;
const InfoNews = () => {
  const dispatch = useDispatch();

  const clickChangePage = (p) => {
    dispatch(changePage(p));
  };
  return (
    <>
      <Row>
        <Col span={24}>
          <Card
            bordered={false}
            style={{
              width: 300,
              minHeight: 200,
              // margin: "30px",
              // float: "right",
            }}
          >
            <Meta
              title="công nghệ thông minh cho tương lai"
              description="Đặt khách hàng làm trọng tâm, các mẫu xe thông minh của VinFast được ứng dụng những công nghệ ưu việt hàng đầu thế giới như trí tuệ nhân tạo, máy móc và học sâu cùng các tính năng tự hành cấp độ cao"
            />
            <Pagination
              style={{
                marginLeft: "10px",
                margin: "15px",
                // transform: "translate(0,0)",
                // backgroundColor: "red",
              }}
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
