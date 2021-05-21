import React, { useState, useEffect } from "react";
import { Row, Col, Image } from "antd";
import { Data } from "../../../../components/data";

const BgNews = () => {
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
    <Row style={{ width: "100%", height: "100%" }}>
      {Data.length !== "" &&
        Data.map((id) => (
          <Col key={id} span={24}>
            {/* <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              className="image_bg"
              src={id.image}
              // src="https://storage.googleapis.com/vinfast-data-01/Rectangle%206188.png"
              alt={id.image}
            /> */}
            <Image
              // width={200}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={id.image}
            />
          </Col>
        ))}
    </Row>
  );
};
export default React.memo(BgNews);
