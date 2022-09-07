import { Button, Card, Col, Row, Skeleton } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const { Meta } = Card;

const ListItems = (props) => {
  const history = useHistory();
  if (props.loading) {
    return <Skeleton active />;
  }
  const data = props?.data.filter(product => product?.id !== 0)
  const handleToDetail = (item) => {
    console.log('ttt', item)
    if(item?.name?.trim()?.toUpperCase() ==='PRESIDENT') {
      history.push('/car-president')
    }
    if(item?.name?.trim()?.toUpperCase() ==='LUXA2.0') {
      history.push('/car-luxa20')
    }
    if(item?.name?.trim()?.toUpperCase() ==='LUXSA2.0') {
      history.push('/car-luxsa20')
    }
    if(item?.name?.trim()?.toUpperCase() ==='FADIL') {
      history.push('/car-fadil')
    }
  }
  return (
    <>
      <Row style={{ margin: "10px 0px" }} gutter={[8, 24]}>
        {data.length > 0
          ? data.map((item, index) => (
              <Col
                key={index}
                span={6}
                style={{
                  // height: "600px",
                  // backgroundColor: "white",
                  // paddingTop: "15px",
                }}
              >
                <Card
                  style={{ height: 500 }}
                  title={item.categoryName}
                  hoverable
                  cover={<img alt={item.name} src={item.imageProduct} />}
                >
                  <Meta title={item.name} description={item.description} />
                <Link>
                  <Button
                    style={{ margin: "10px auto", justifyContent: "center" }}
                    onClick={()=> handleToDetail(item)}
                  >
                    Chi tiet
                  </Button>
                </Link>
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
