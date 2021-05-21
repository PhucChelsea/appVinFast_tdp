import React, { useState, useEffect } from "react";
import { Row, Col, Card, Pagination } from "antd";
import { Data } from "../../../../components/data";
const { Meta } = Card;
const InfoNews = () => {
  const [page, setPage] = useState(1);
  const [listData, setListData] = useState([]);

  useEffect(() => {
    try {
      const getDataNews = async () => {
        if (Data !== "") {
          setListData(Data);
        }
      };
      getDataNews();
    } catch (error) {
      console.log("da co loi:", error);
    }
  }, [page]);
  return (
    <>
      <Row style={{ width: "100%", height: "100%" }}>
        {Data.map((id) => (
          <Col key={id} span={24}>
            <Card
              bordered={false}
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "aqua",
                // width: 300,
                // minHeight: 200,
                // margin: "30px",
                // float: "right",
              }}
            >
              <Meta title={id.title} description={id.text} />
            </Card>
          </Col>
        ))}
      </Row>
      {/* <Row style={{ textAlign: "center", marginTop: "10px" }}>
        <Col span={24}>
          <Pagination
            current={page}
            pageSize={5}
            size="small"
            total={50}
          />
        </Col>
      </Row> */}
    </>
  );
};
export default React.memo(InfoNews);
