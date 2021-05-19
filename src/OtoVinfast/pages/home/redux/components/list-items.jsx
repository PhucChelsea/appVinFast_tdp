import React from "react";
import { Row, Col, Card, Button, Skeleton } from "antd";

const { Meta } = Card;

const ListItems = (props) => {
  if (props.loading) {
    return <Skeleton active />;
  }
  return (
    <>
      <Row
        style={{ margin: "10px 0px" }}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        {props.data.length > 0
          ? props.data.map((item, index) => (
              <Col key={index} span={6}>
                <Card
                  hoverable
                  cover={<img alt={item.name} src={item.image} />}
                >
                  <Meta title={item.name} />
                  <Button type="primary ">Chi tiet </Button>
                </Card>
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
