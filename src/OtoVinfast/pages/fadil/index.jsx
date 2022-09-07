import React, { useEffect, useState } from "react";
import MasterLayoutVinFast from "../../components/MasterLayout";
import LayoutContentPage from "../../components/LayoutContent";
import axios from "axios";

const FadilPage = () => {
  const urlBg =
    "https://carpassion.vn/wp-content/uploads/2021/02/VF-Fadil-Ocean.jpg";
  const urlContent =
    "https://vinfastvietnamvn.com/wp-content/uploads/2021/06/VFFadil06.png";
  const urlProduct =
    "https://vinfast-angiang.com.vn/public/upload/images/hinhsanpham/fadil-1781598521141.png";
  const [data, setData] = useState([]);
  const [version, setVersion] = useState(20);
  const handleChangeTab = (key) => {
    console.log("ttt key", key);
    if (key === 1) {
      setVersion(20);
    } else if (key === 2) {
      setVersion(21);
    } else if (key === 3) {
      setVersion(22);
    } else {
      setVersion(20);
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
export default React.memo(FadilPage);
