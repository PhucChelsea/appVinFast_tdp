import React from "react";
import LayoutContentPage from "../../components/LayoutContent";
import MasterLayoutVinFast from "../../components/MasterLayout";

const PresidentPage = () => {
  return (
    <MasterLayoutVinFast>
      <LayoutContentPage />
    </MasterLayoutVinFast>
  );
};
export default React.memo(PresidentPage);
