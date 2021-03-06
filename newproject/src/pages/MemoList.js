import React, { Component } from "react";
import NavBar from "../component/NavBar";
import SimpleTabs from "../component/Tab/MenuTabs";
import Search from "../component/Search/Search";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = (theme) => ({
  search: {
    float: "right",
    // marginTop: "50px",
    // position: "absolute",
    backgroundColor: "red",
  },
});

export class MusicUpload extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <NavBar />
        {/* <hr /> */}
        <SimpleTabs />
        {/* <div className={classes.search}>
          <Search />
        </div> */}
      </div>
    );
  }
}

export default withStyles(styles)(MusicUpload);
