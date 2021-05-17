import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";

import banner4 from "../img/banner4.png";
const DivNews = styled.div`
  position: relative;
`;
const DivText = styled.div`
  position: absolute;
  top: 20px;
  bottom: 20px;
  right: 50px;
  width: 300px;
  min-height: 300px;
  background-color: #fff;
`;
function News() {
  return (
    <div style={{ width: "100%" }}>
      <Row style={{ margin: "30px 10px" }}>
        <Col span={18} offset={3}>
          <DivNews>
            <img
              style={{ width: "100%", minHeight: "400px", objectFit: "cover" }}
              src={banner4}
              alt=""
            />
            <DivText>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                quas hic aut, delectus rerum recusandae tenetur laboriosam at
                necessitatibus amet atque optio magni quibusdam eos saepe
                similique assumenda adipisci consequatur.
              </p>
            </DivText>
          </DivNews>
        </Col>
      </Row>
    </div>
  );
}

export default News;
