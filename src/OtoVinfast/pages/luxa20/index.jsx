import React from "react";
import MasterLayoutVinFast from "../../components/MasterLayout";
import LayoutContentPage from "../../components/LayoutContent";

const LuxA20Page = () => {
  return (
    <MasterLayoutVinFast>
      <h1>Lux A 2.0 Page</h1>
      <LayoutContentPage />
    </MasterLayoutVinFast>
  );
};
export default React.memo(LuxA20Page);
