import React, { useEffect, useState } from "react";
import MasterLayoutVinFast from "../../components/MasterLayout";
import LayoutContentPage from "../../components/LayoutContent";
import axios from "axios";

const LuxA20Page = () => {
  const urlBg =
    "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw5280b7f5/images/vfast/hinh-anh-dang-ky-lai-thu-VinFast-Lux-A2.0.png";
  const urlContent =
    "https://vinfast-oto36.com/wp-content/uploads/2021/03/Sedan-4265-scaled-1.jpg";
  const urlProduct =
    "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw8ce6368e/images/vfast/hinh-anh-an-toan-cong-nghe-VinFast-Lux-A-2.0-ban-tieu-chuan.png";
  const [data, setData] = useState([]);
  const [version, setVersion] = useState(17);
  const handleChangeTab = (key) => {
    console.log("ttt key", key);
    if (key === 1) {
      setVersion(17);
    } else if (key === 2) {
      setVersion(18);
    } else if (key === 3) {
      setVersion(19);
    } else {
      setVersion(17);
    }
  };
  useEffect(() => {
    const getDataPresident = async () => {
      const res = await axios.get(
        `https://api-vinfast.herokuapp.com/api/versionList?categoryId=1&id=${version}`
      );
      console.log("res", res);
      setData(res?.data[0]);
    };
    getDataPresident();
  }, [version]);
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
export default React.memo(LuxA20Page);
