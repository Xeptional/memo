import React, { Component, Suspense } from "react";
import "./assets/base.scss";
import Routes from "./Routes";
import store from "./store";
import "./App.css";
import { Provider, connect } from "react-redux";
import { withRouter } from "react-router-dom";

// Component
import NavBar from "./component/NavBar";

// action
import { loadUser } from "./action/userAction";

// pages
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import MemoList from "./pages/MemoList";
import SuspenseLoading from "./component/loader";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <>
        <Routes />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading,
});

export default withRouter(connect(mapStateToProps)(App));
