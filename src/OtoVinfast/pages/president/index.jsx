import React from "react";
import LayoutContentPage from "../../components/LayoutContent";
import MasterLayoutVinFast from "../../components/MasterLayout";

const PresidentPage = () => {
  return (
    <MasterLayoutVinFast>
      <h1>President Page</h1>
      <LayoutContentPage />
    </MasterLayoutVinFast>
  );
};
export default React.memo(PresidentPage);
