import React from "react";
import { Row, Col, Button, Tabs, Card } from "antd";

const LayoutContentPage = ({
  data,
  handleChangeTab,
  urlBg,
  urlContent,
  urlProduct,
}) => {
  console.log("ttt data", data);
  const renderCard = () => {
    return (
      <Card
        bordered={false}
        padding={"0px 0px"}
        style={{
          width: "100%",
        }}
      >
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Col style={{ width: 100, display: "inline-block" }}>
            <Row style={{ fontSize: "14px", fontWeight: "bold" }}>
              Dài * Rộng * Cao
            </Row>
            <Row>{data?.size} (mm)</Row>
          </Col>
          <Col style={{ width: 100, display: "inline-block" }}>
            <Row style={{ fontSize: "14px", fontWeight: "bold" }}>Động cơ</Row>
            <Row>{data?.engine}L</Row>
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Col style={{ width: 100, display: "inline-block" }}>
            <Row style={{ fontSize: "14px", fontWeight: "bold" }}>
              Chiều dài cơ sở
            </Row>
            <Row>{data?.wheelBase} (mm)</Row>
          </Col>
          <Col style={{ width: 100, display: "inline-block" }}>
            <Row style={{ fontSize: "14px", fontWeight: "bold" }}>
              Công suất tối đa
            </Row>
            <Row>{data?.maxPower} HP</Row>
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Col style={{ width: 100, display: "inline-block" }}>
            <Row style={{ fontSize: "14px", fontWeight: "bold" }}>
              Khoảng sáng gầm
            </Row>
            <Row>{data?.groundClearance} (mm)</Row>
          </Col>
          <Col style={{ width: 100, display: "inline-block" }}>
            <Row style={{ fontSize: "14px", fontWeight: "bold" }}>
              Mô men xoắn cực đại
            </Row>
            <Row>{data?.maximumTorque} Nm</Row>
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Col style={{ width: 100, display: "inline-block" }}>
            <Row style={{ fontSize: "14px", fontWeight: "bold" }}>
              Dung tích nhiên liệu
            </Row>
            <Row>{data?.fuelCapacity}L</Row>
          </Col>
          <Col style={{ width: 100, display: "inline-block" }}>
            <Row style={{ fontSize: "14px", fontWeight: "bold" }}>Hộp số</Row>
            <Row>{data?.gear}</Row>
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Col style={{ width: 100, display: "inline-block" }}>
            <Row style={{ fontSize: "14px", fontWeight: "bold" }}>
              Mức tiêu thụ nhiêu liệu
            </Row>
            <Row>{data?.fuelConsumption}</Row>
          </Col>
          <Col style={{ width: 100, display: "inline-block" }}>
            <Row style={{ fontSize: "14px", fontWeight: "bold" }}>Dẫn động</Row>
            <Row>{data?.drive}</Row>
          </Col>
        </Row>
      </Card>
    );
  };
  return (
    <div style={{ backgroundColor: "blanchedalmond" }}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          span={24}
          style={{
            width: "100%",
            minHeight: "100vh",
            background: `url(${urlBg})`,
            // background: `url(${data?.imageProduct})`,
            // background:"url(https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwac5ca505/images/vfast/Hinh-anh-xe-SUV-VinFast-President-gia-xe-thong-so-bang-mau-dong-co-v8.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto",
            // display: "flex",
            // justifyContent: "flex-end",
            position: "relative",
          }}
        >
          <div
            style={{
              // border: "1px solid black",
              textTransform: "uppercase",
              color: "aqua",
              display: "flex",
              // flexDirection: "column",
              justifyContent: "center",
              fontSize: "20px",
              fontWeight: 900,
              width: "100%",
              // marginBottom: '10px',
              position: "absolute",
              bottom: "50px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                borderRight: "2px solid",
                padding: " 0 10px",
                textAlign: "center",
              }}
            >
              <div>Động cơ</div>
              <div>{data?.engine}l</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                borderRight: "2px solid",
                padding: " 0 10px",
                textAlign: "center",
              }}
            >
              <div>Công suất</div>
              <div>{data?.maxPower}HP</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                borderRight: "2px solid",
                padding: " 0 10px",
                textAlign: "center",
              }}
            >
              <div>Chiều dài cơ sở</div>
              <div>{data?.wheelBase}mm</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          span={24}
          style={{
            width: "100%",
            minHeight: "100vh",
            background: `url(${urlContent})`,
            // background:
            //   "url(https://vinfastauto.com/sites/default/files/styles/images_1440_x_623/public/2021-01/Rectangle%20594%20%281%29.png?itok=EdYaUE91)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <div
            style={{
              // border: "1px solid yellow",
              fontSize: "60px",
              color: "whitesmoke",
              fontWeight: 20,
              textTransform: "uppercase",
              letterSpacing: "20px",
              opacity: ".5",
              position: "relative",
            }}
          >
            <p style={{ position: "absolute", top: 100, left: 300 }}>
              VinFast {data?.name}
            </p>
          </div>
          <div
            style={{
              // border: "1px solid red",
              display: "flex",
              flexDirection: "column",
              marginTop: "400px",
              color: "whitesmoke",
              opacity: ".8",
              // fontSize: "20px",
            }}
          >
            <span
              style={{
                fontSize: "30px",
                letterSpacing: "5px",
                textTransform: "uppercase",
                paddingLeft: "80px",
              }}
            >
              Cùng bạn <p> bứt phá mọi giới hạn</p>
            </span>
            <p style={{ paddingLeft: "80px", paddingBottom: "50px" }}>
              {data?.description}
            </p>
          </div>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          xs={24}
          sm={24}
          md={10}
          lg={10}
          style={{ backgroundColor: "white" }}
        >
          <Row>
            <Col
              style={{
                textTransform: "uppercase",
                display: "flex",
                flexDirection: "column",
                padding: "40px 60px",
              }}
            >
              {/* <div style={{ textTransform: "uppercase", display:'flex', flexDirection:'column', padding:'40px 60px'}}> */}
              <div
                style={{
                  color: "#808080",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: "100%",
                }}
              >
                Vinfast {data?.name}
              </div>
              <div
                style={{
                  color: "black",
                  fontSize: "30px",
                  fontWeight: "normal",
                  letterSpacing: "8px",
                }}
              >
                Thông số xe
              </div>
              <p
                style={{
                  color: "#808080",
                  width: "100%",
                  fontSize: "10px",
                  fontWeight: "normal",
                  textTransform: "none",
                }}
              >
                Các thông tin sản phẩm có thể thay đổi mà không cần báo trước
              </p>
              {/* </div> */}
            </Col>
            <Col style={{ padding: "0 60px" }}>
              <Tabs
                defaultActiveKey="1"
                onChange={(key) => handleChangeTab(key)}
              >
                <Tabs.TabPane tab="TIÊU CHUẨN" key="1">
                  {renderCard()}
                </Tabs.TabPane>
                <Tabs.TabPane tab="NÂNG CAO" key="2">
                  {renderCard()}
                </Tabs.TabPane>
                <Tabs.TabPane tab="CAO CẤP" key="3">
                  {renderCard()}
                </Tabs.TabPane>
              </Tabs>
            </Col>
          </Row>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={14}
          lg={14}
          style={{
            margin: 'auto 0',
            width: "100%",
            // minHeight: "100vh",
            // background: `url(${urlProduct})`,
            // // background:
            // //   "url(https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw47cd0e93/images/vfast/hinh-anh-thong-so-VinFast-President-V8.png)",
            // backgroundRepeat: "no-repeat",
            // backgroundSize: "auto",
            // backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <img src={urlProduct} alt="" />
          {/* <Button
            style={{
              marginBottom: "50px",
              fontWeight: 700,
              fontSize: "20px",
              width: "300px",
              height: "60px",
              // backgroundColor: "blueviolet",
            }}
            // disabled
          >
            MUA NGAY
          </Button> */}
        </Col>
      </Row>
    </div>
  );
};
export default React.memo(LayoutContentPage);
