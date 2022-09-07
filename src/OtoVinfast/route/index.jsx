import React, { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import configStore from "../Redux/store";
import { Skeleton } from "antd";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { helpers } from "../helpers/common";

const { store } = configStore({});
const HomePage = lazy(() => import("../pages/home/index"));
const PresidentPage = lazy(() => import("../pages/president/index"));
const LuxSA20Page = lazy(() => import("../pages/luxsa20/index"));
const LuxA20Page = lazy(() => import("../pages/luxa20/index"));
const FadilPage = lazy(() => import("../pages/fadil/index"));
const TestDrivePage = lazy(() => import("../pages/testDrive/index"));
const NewOldPage = lazy(() => import("../pages/newOld/index"));
const LoginPage = lazy(() => import("../pages/login/index"));
const ShopingcartPage = lazy(() => import("../pages/cart/index"));

const PrivateRouter = ({ children, ...rest }) => {
  const auth = helpers.isAuthenticated();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{ pathname: "/car-login", state: { from: location } }}
          />
        )
      }
    />
  );
};

const IsLoginRouter = ({ children, ...rest }) => {
  const auth = helpers.isAuthenticated();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          <Redirect to={{ pathname: "/", state: { from: location } }} />
        ) : (
          children
        )
      }
    />
  );
};

const RouterVinFast = () => {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Skeleton active />}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/car-home">
              <HomePage />
            </Route>
            <Route path="/car-president">
              <PresidentPage />
            </Route>
            <Route path="/car-luxsa20">
              <LuxSA20Page />
            </Route>
            <Route path="/car-luxa20">
              <LuxA20Page />
            </Route>
            <Route path="/car-fadil">
              <FadilPage />
            </Route>
            <Route path="/dang-ki-lai-thu">
              <TestDrivePage />
            </Route>
            <Route path="/thu-cu-doi-moi">
              <NewOldPage />
            </Route>
            {/* <IsLoginRouter path="/car-login">
              <LoginPage />
            </IsLoginRouter>
            <PrivateRouter path="/gio-hang">
              <ShopingcartPage />
            </PrivateRouter> */}
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
};
export default React.memo(RouterVinFast);
