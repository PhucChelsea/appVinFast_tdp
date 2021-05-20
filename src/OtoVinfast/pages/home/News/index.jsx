import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "antd";
// import { changePage } from "../../home/News/actions/index";
// import * as actions from "./actions/index";
// import * as reselect from "../../home/redux/reselect/info_bonus-reselect";
// import { createStructuredSelector } from "reselect";
import BgNews from "./components/BgNews";
import InfoNews from "./components/InfoNews";

function News() {
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
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "20px" }}>
        Hành trình chinh phục thế giới
      </h1>
      <Row>
        <Col span={18} offset={3} style={{ position: "relative" }}>
          <BgNews />
          <Row style={{ position: "absolute", top: 20, left: 600 }}>
            <Col span={24}>
              <InfoNews />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default News;
