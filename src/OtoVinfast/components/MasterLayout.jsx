import React from "react";
import HeaderVinFast from "./HeaderComponent";
import FooterVinFast from "./FooterComponent";
import { Layout, BackTop } from "antd";
import PropTypes from "prop-types";
import {
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
} from "react-share";
import MessengerCustomerChat from "react-messenger-customer-chat";

const { Header, Footer, Content } = Layout;
const style = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#1088e9",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};
const MasterLayoutVinFast = (props) => {
  return (
    <Layout>
      <Header>
        <HeaderVinFast />
      </Header>

      <Layout>
        <Content>{props.children}</Content>
      </Layout>

      <Footer>
        <FooterVinFast />
      </Footer>
      <BackTop>
        <div style={style}>UP</div>
      </BackTop>
      <div
        style={{
          position: "fixed",
          bottom: 50,
          left: 50,
          width: "50px",
          height: "50px",
        }}
      >
        {/* <MessengerCustomerChat pageId="106371874643189" appId="<APP_ID>">
          <FacebookMessengerIcon size={50} round={true}/>
        </MessengerCustomerChat> */}
        <FacebookMessengerShareButton url={'https://www.facebook.com/'}>
          <FacebookMessengerIcon size={50} round={true}/>
        </FacebookMessengerShareButton>
      </div>
    </Layout>
  );
};
MasterLayoutVinFast.propTypes = {
  children: PropTypes.node.isRequired,
};
export default React.memo(MasterLayoutVinFast);
