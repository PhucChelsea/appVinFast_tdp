import React from "react";
import MasterLayoutVinFast from "../../components/MasterLayout";
import LayoutContentPage from "../../components/LayoutContent";

const LuxSA20Page = () => {
  return (
    <MasterLayoutVinFast>
      <h1>Lux SA 2.0 Page</h1>
      <LayoutContentPage />
    </MasterLayoutVinFast>
  );
};
export default React.memo(LuxSA20Page);
