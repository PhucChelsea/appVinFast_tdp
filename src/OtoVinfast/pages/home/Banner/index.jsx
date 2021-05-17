import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";
import banner1 from "../img/banner1.png";
import banner2 from "../img/banner2.png";
import banner3 from "../img/banner3.png";
import banner4 from "../img/banner4.png";

const DivCarousel = styled.div`
  width: 100%;
  height: 80vh;
`;
const StyleImg = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};
const BannerHome = () => {
  return (
    <div className="carousel">
      <Carousel autoplay>
        <DivCarousel>
          <img style={StyleImg} src={banner1} alt="banner1" />
        </DivCarousel>
        <DivCarousel>
          <img style={StyleImg} src={banner2} alt="banner2" />
        </DivCarousel>
        <DivCarousel>
          <img style={StyleImg} src={banner3} alt="banner3" />
        </DivCarousel>
        <DivCarousel>
          <img style={StyleImg} src={banner4} alt="banner4" />
        </DivCarousel>
      </Carousel>
    </div>
  );
};

export default React.memo(BannerHome);
