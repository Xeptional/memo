import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";

class Form extends Component {
  render() {
    return (
      <div style={{ paddingTop: "50px" }}>
        <div style={{ paddingTop: "20px" }}>
          <label style={{ paddingRight: "35px" }}>From: </label>
          <TextField
            style={{ width: "80%" }}
            id="outlined-basic"
            variant="outlined"
          />
        </div>
        <div style={{ paddingTop: "20px" }}>
          <label style={{ paddingRight: "50px" }}>To: </label>
          <TextField
            style={{ width: "80%" }}
            id="outlined-basic"
            variant="outlined"
          />
        </div>
        <div style={{ paddingTop: "20px" }}>
          <label style={{ paddingRight: "40px" }}>Title: </label>
          <TextField
            style={{ width: "80%" }}
            id="outlined-basic"
            variant="outlined"
          />
        </div>
        <div style={{ paddingTop: "20px" }}>
          <label style={{ paddingRight: "23px" }}>Remark: </label>
          <TextField
            style={{ width: "80%" }}
            id="outlined-basic"
            variant="outlined"
          />
        </div>
      </div>
    );
  }
}

export default Form;
