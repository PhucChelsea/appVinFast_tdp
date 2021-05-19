import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import FeatureProducts from "../redux/components/featured";
import TopSellingProducts from "../redux/components/top-selling";
//import * as reselect from "../redux/reselect/product-reselect";
import * as actions from "../redux/actions/index";

const ProductHome = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getData());
  }, [dispatch]);
  return (
    <>
      <FeatureProducts />
      <TopSellingProducts />
    </>
  );
};

export default React.memo(ProductHome);
