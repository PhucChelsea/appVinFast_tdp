import axios from "axios";
import React, { useEffect, useState } from "react";
import LayoutContentPage from "../../components/LayoutContent";
import MasterLayoutVinFast from "../../components/MasterLayout";

const PresidentPage = () => {
  const urlBg =
    "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwac5ca505/images/vfast/Hinh-anh-xe-SUV-VinFast-President-gia-xe-thong-so-bang-mau-dong-co-v8.jpg";
  const urlContent =
    "https://vinfastauto.com/sites/default/files/styles/images_1440_x_623/public/2021-01/Rectangle%20594%20%281%29.png?itok=EdYaUE91";
  const urlProduct =
    "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw47cd0e93/images/vfast/hinh-anh-thong-so-VinFast-President-V8.png";
  const [data, setData] = useState([]);
  const handleChangeTab = (key) => {
    console.log("ttt key", key);
  };
  useEffect(() => {
    const getDataPresident = async () => {
      const res = await axios.get(
        "https://api-vinfast.herokuapp.com/api/versionList?categoryId=1&id=13"
      );
      console.log("res", res);
      setData(res?.data[0]);
    };
    getDataPresident();
  }, []);
  return (
    <MasterLayoutVinFast>
      <LayoutContentPage
        data={data}
        handleChangeTab={handleChangeTab}
        urlBg={urlBg}
        urlContent={urlContent}
        urlProduct={urlProduct}
      />
    </MasterLayoutVinFast>
  );
};
export default React.memo(PresidentPage);
