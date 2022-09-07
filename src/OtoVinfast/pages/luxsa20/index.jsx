import React, { useEffect, useState } from "react";
import MasterLayoutVinFast from "../../components/MasterLayout";
import LayoutContentPage from "../../components/LayoutContent";
import axios from "axios";

const LuxSA20Page = () => {
  const urlBg =
    "https://drive.gianhangvn.com/image/vinfast-lux-sa2-0-den-1538168j29588.jpg";
  const urlContent =
    "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw233ab177/images/vfast/hinh-anh-VinFast-Lux-SA2.0-gia-danh-gia-noi-that-thong-so.png";
  const urlProduct =
    "https://vinfastthanhhoa.vn/wp-content/uploads/2020/08/LUX-SA-M2-Black-1.jpg";
  const [data, setData] = useState([]);
  const [version, setVersion] = useState(14);
  const handleChangeTab = (key) => {
    console.log("ttt key", key);
    if (key === 1) {
      setVersion(14);
    } else if (key === 2) {
      setVersion(15);
    } else if (key === 3) {
      setVersion(16);
    } else {
      setVersion(14);
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
export default React.memo(LuxSA20Page);
