import React, { lazy, Suspense } from "react";
import { Skeleton } from "antd";
import { Provider } from "react-redux";
import configStore from "../../Redux/store";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const SelectionPage = lazy(() => import("./pages/selection"));
const DepositPage = lazy(() => import("./pages/deposit"));
const LoginPage = lazy(() => import("../login/index"));

const { store } = configStore({});
const RouterShopCart = () => {
  const { path, url } = useRouteMatch();
  console.log("path_:", path);
  console.log("url:", url);
  return (
    <Provider store={store}>
      <Suspense fallback={<Skeleton active />}>
        <Switch>
          <Route exact path={path}>
            <SelectionPage />
          </Route>
          <Route path="/gio-hang/car">
            <SelectionPage />
          </Route>
          <Route path="/gio-hang/deposit">
            <DepositPage />
          </Route>
          <Route path="/car-login">
            <LoginPage />
          </Route>
        </Switch>
      </Suspense>
    </Provider>
  );
};
export default RouterShopCart;
