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
  const { path } = useRouteMatch();
  return (
    <Provider store={store}>
      <Suspense fallback={<Skeleton active />}>
        <Switch>
          <Route exact path={path}>
            <SelectionPage />
          </Route>
          <Route path={`${path}#car`}>
            <SelectionPage />
          </Route>
          <Route path={`${path}#deposit`}>
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
