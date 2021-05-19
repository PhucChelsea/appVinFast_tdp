import React from "react";

const BgNews = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "red",
          margin: "30px 100px",
          width: "100%",
          height: "50vh",
        }}
      >
        <img className="image_bg" src="{item.image}" alt="" />
      </div>
    </>
  );
};
export default React.memo(BgNews);
