import React, { useState, Suspense } from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import store from "./store";

// Component
import NavBar from "./component/NavBar";

// action
import { loadUser } from "./action/userAction";

// pages
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import MemoList from "./pages/MemoList";
import SuspenseLoading from "./component/loader";

const Routes = (props) => {
  const loading = useSelector((state) => state.loading.loading);
  return (
    <div>
      {loading ? (
        <SuspenseLoading />
      ) : (
        <>
          <Suspense fallback={<SuspenseLoading />}>
            {/* <Provider store={store}> */}
            <Switch>
              <Redirect exact from="/" to={`${process.env.REACT_APP_URL}`} />
            </Switch>
            <Switch>
              <Route
                exact
                path={`${process.env.REACT_APP_URL}`}
                component={Signin}
              />
              <Route
                exact
                path={`${process.env.REACT_APP_URL}/memo-list`}
                component={MemoList}
              />
              <Route
                exact
                path={`${process.env.REACT_APP_URL}/signup`}
                component={Signup}
              />
            </Switch>
            {/* </Provider> */}
          </Suspense>
        </>
      )}
    </div>
  );
};

export default Routes;
