import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Search from "../../Search/Search";
import PropTypes from "prop-types";

const styles = (theme) => ({
  bodys: {
    // maxHeight: "100%",
    backgroundColor: "green",
  },
  // wholeHeader: {
  //   marginBottom: "20px",
  // },
  header: {
    float: "left",
  },
  newButton: {
    float: "right",
  },
  search: {
    float: "right",
    backgroundColor: "red",
    marginTop: "50px",
  },
});

const Memolist = (props) => {
  const { classes } = props;
  return (
    <>
      <div>
        <div className={classes}>
          <div className={classes}>
            <h2 className={classes.header}>MEMO LIST</h2>
            <Button className={classes.newButton}>Add New</Button>
          </div>
          {/* <div className={classes.search}>
          </div> */}
          {/* <Search /> */}
          <input className={classes.search} />
        </div>
      </div>
    </>
  );
};

Memolist.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Memolist);
