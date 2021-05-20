import React from "react";
import LayoutContentPage from "../../components/LayoutContent";
import MasterLayoutVinFast from "../../components/MasterLayout";

const FadilPage = () => {
  return (
    <MasterLayoutVinFast>
      <h1>Fadil Page</h1>
      <LayoutContentPage />
    </MasterLayoutVinFast>
  );
};
export default React.memo(FadilPage);
