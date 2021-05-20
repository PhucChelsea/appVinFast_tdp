import { Button, Card, Col, Row, Skeleton } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { Meta } = Card;

const ListItems = (props) => {
  if (props.loading) {
    return <Skeleton active />;
  }
  return (
    <>
      <Row style={{ margin: "10px 0px" }} gutter={[8, 24]}>
        {props.data.length > 0
          ? props.data.map((item, index) => (
              <Col
                key={index}
                span={6}
                style={{
                  height: "600px",
                  backgroundColor: "white",
                  paddingTop: "15px",
                }}
              >
                <Card
                  style={{ height: 500 }}
                  title={item.name}
                  hoverable
                  cover={<img alt={item.name} src={item.image} />}
                >
                  <Meta title={item.name} description={item.description} />
                </Card>
                <Link>
                  <Button
                    style={{ margin: "10px auto", justifyContent: "center" }}
                  >
                    Chi tiet
                  </Button>
                </Link>
              </Col>
            ))
          : null}
        {/* <Col span={6}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" />
            <Button type="primary">Mua</Button>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" />
            <Button type="primary">Mua</Button>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" />
            <Button type="primary">Mua</Button>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" />
            <Button type="primary">Mua</Button>
          </Card>
        </Col> */}
      </Row>
    </>
  );
};
export default React.memo(ListItems);
