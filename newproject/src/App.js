import React, { Component, Suspense } from "react";
import Routes from "./Routes";
import store from "./store";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { indigo, pink } from "@material-ui/core/colors";
import { Provider, connect } from "react-redux";
import { withRouter } from "react-router-dom";

// action
import { loadUser } from "./action/userAction";
import { loadMemo } from "./action/newMemoForm";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  // far,
  // faSquare,
  // faLifeRing,
  // faCheckCircle,
  // faTimesCircle,
  // faDotCircle,
  // faThumbsUp,
  // faComments,
  // faFolderOpen,
  // faTrashAlt,
  // faFileImage,
  // faFileArchive,
  // faCommentDots,
  // faFolder,
  // faKeyboard,
  // faCalendarAlt,
  // faEnvelope,
  // faAddressCard,
  // faMap,
  // faObjectGroup,
  // faImages,
  // faUser,
  // faLightbulb,
  // faGem,
  // faClock,
  // faUserCircle,
  // faQuestionCircle,
  // faBuilding,
  // faBell,
  // faFileExcel,
  // faFileAudio,
  // faFileVideo,
  // faFileWord,
  // faFilePdf,
  // faFileCode,
  // faFileAlt,
  faEdit,
  faEye,
  // faChartBar,
} from "@fortawesome/free-regular-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
library.add(
  // far,
  // faSquare,
  // faLifeRing,
  // faCheckCircle,
  // faTimesCircle,
  // faDotCircle,
  // faThumbsUp,
  // faComments,
  // faFolderOpen,
  // faTrashAlt,
  // faFileImage,
  // faFileArchive,
  // faCommentDots,
  // faFolder,
  // faKeyboard,
  // faCalendarAlt,
  // faEnvelope,
  // faAddressCard,
  // faMap,
  // faObjectGroup,
  // faImages,
  // faUser,
  // faLightbulb,
  // faGem,
  // faClock,
  // faUserCircle,
  // faQuestionCircle,
  // faBuilding,
  // faBell,
  // faFileExcel,
  // faFileAudio,
  // faFileVideo,
  // faFileWord,
  // faFilePdf,
  // faFileCode,
  // faFileAlt,
  faEdit,
  faEye,
  faPaperclip
  // faChartBar
);

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757de8",
      main: "#3f51b5",
      dark: "#002984",
      contractText: "#fff",
    },
    secondary: {
      light: "#ff79b0",
      main: "#ff4081",
      dark: "#c60055",
      contractText: "#000",
    },
    openTitle: indigo["400"],
    protectedTitle: pink["400"],
    type: "light",
  },
});

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
    store.dispatch(loadMemo());
  }
  render() {
    return (
      <>
        <MuiThemeProvider theme={theme}>
          <Routes />
        </MuiThemeProvider>
      </>
    );
  }
}

export default App;
