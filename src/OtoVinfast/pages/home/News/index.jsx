import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Image, Card } from "antd";
// import { changePage } from "../../home/News/actions/index";
// import * as actions from "./actions/index";
// import * as reselect from "../../home/redux/reselect/info_bonus-reselect";
// import { createStructuredSelector } from "reselect";
// import BgNews from "./components/BgNews";
// import InfoNews from "./components/InfoNews";

import { Data } from "../../../components/data";
const { Meta } = Card;

function News() {
  const [info, setInfo] = useState("");
  const [listData, setListData] = useState([]);
  console.log(listData);

  useEffect(() => {
    try {
      const getDataNews = async () => {
        if (Data !== "") {
          setInfo("");
          setListData(Data);
        }
      };
      getDataNews();
    } catch (error) {
      console.log("da co loi:", error);
    }
  }, [info]);
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          margin: "20px",
          fontSize: "60px",
          fontWeight: "bold",
        }}
      >
        Hành trình chinh phục thế giới
      </h1>
      <Row style={{ margin: "0px 50px" }}>
        {Data !== "" &&
          Data.map((id) => (
            <Col key={id} span={24}>
              {/* <div data-aos="zoom-in-up"> */}
              <Row style={{ width: "100%", height: "100%", display: "flex" }}>
                {/* <div data-aos="fade-right"> */}
                <Col key={id} span={18}>
                <div data-aos="zoom-in-up" style={{ height: "100%" }}>
                  <Image
                    // width={200}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={id.image}
                  />
                  </div>
                </Col>
                {/* </div> */}
                <Col
                  key={id}
                  span={6}
                  // offset={7}
                  // style={{ position: "absolute" }}
                >
                  <div data-aos="zoom-in-up" style={{ height: "98.5%" }}>
                    <Card
                      bordered={false}
                      style={{
                        // width: "300px",
                        height: "100%",
                        // backgroundColor: "aqua",
                        // position: "absolute",
                        // top: "70px",
                        // left: "500px",
                        // borderRadius: "20px 20px ",
                        // opacity: ".6",
                      }}
                    >
                      <Meta
                        // style={{ zIndex: "10" }}
                        title={id.title}
                        description={id.text}
                      />
                    </Card>
                  </div>
                </Col>
              </Row>
              {/* </div> */}
            </Col>
          ))}
      </Row>
    </>
  );
}
// const { loadingIf, infoBonus } = useSelector(
//   createStructuredSelector({
//     loadingIf: reselect.loadingInFoSelector,
//     infoBonus: reselect.getInfoSelector,
//   })
// );

// const dispatch = useDispatch();
// useEffect(() => {
//   dispatch(actions.changePage());
// }, [dispatch]);
// const clickChangePage = (p) => {
//   dispatch(changePage(p));
// };
// const loading = useSelector((state) => state.changePageReducer.loading);
// const data_News = useSelector((state) => state.changePageReducer.dataNews);
// if (loading) {
//   return (
//     <Row>
//       <Col span={24}>
//         <Skeleton active />
//       </Col>
//     </Row>
//   );
// }

export default News;
