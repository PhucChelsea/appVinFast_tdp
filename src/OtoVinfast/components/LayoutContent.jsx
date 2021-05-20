import React from "react";
import { Row, Col, Button } from "antd";

const LayoutContentPage = () => {
  return (
    <div style={{ backgroundColor: "blanchedalmond" }}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          span={24}
          style={{
            width: "100%",
            minHeight: "100vh",
            background:
              "url(https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwac5ca505/images/vfast/Hinh-anh-xe-SUV-VinFast-President-gia-xe-thong-so-bang-mau-dong-co-v8.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "150px",
            paddingTop: "100px",
          }}
        >
          <div
            style={{
              // border: "1px solid black",
              textTransform: "uppercase",
              color: "blue",
              display: "flex",
              flexDirection: "column",
              fontSize: "40px",
              fontWeight: 700,
            }}
          >
            <span>Dòng SUV</span>
            <span style={{ fontSize: "20px" }}>DẤU ẤN NGƯỜI THỦ LĨNH</span>
            <Button
              style={{
                marginTop: "20px",
                fontWeight: 700,
                width: "200px",
                height: "50px",
              }}
            >
              MUA NGAY
            </Button>
          </div>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          span={24}
          style={{
            width: "100%",
            minHeight: "100vh",
            background:
              "url(https://vinfastauto.com/sites/default/files/styles/images_1440_x_623/public/2021-01/Rectangle%20594%20%281%29.png?itok=EdYaUE91)",
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
              VinFast President
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
              Với tầm nhìn toàn cầu, VinFast sáng tạo không ngừng để mang lại
              những sản phẩm đẳng cấp,
              <p>trải nghiệm thông minh và giá trị vượt trộ cho khách hàng</p>
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
          <h1>thông số</h1>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={14}
          lg={14}
          style={{
            width: "100%",
            minHeight: "100vh",
            background:
              "url(https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw47cd0e93/images/vfast/hinh-anh-thong-so-VinFast-President-V8.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Button
            style={{
              marginBottom: "50px",
              fontWeight: 700,
              fontSize: "20px",
              width: "300px",
              height: "60px",
              backgroundColor: "blueviolet",
            }}
          >
            MUA NGAY
          </Button>
        </Col>
      </Row>
    </div>
  );
};
export default React.memo(LayoutContentPage);
