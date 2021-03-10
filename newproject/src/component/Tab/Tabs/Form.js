import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import UploadButton from "../../Uploadbtn";

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       memoFrom: "",
       memoTo: "",
       memoTitle: "",
       memoRemark: "",
    }
  }
  

  handleSubmit = (e) => {
    e.preventDefault();


  }

  render() {
    return (
      <div style={{ paddingTop: "50px" }}>
        <div style={{ paddingTop: "20px" }}>
          <label style={{ paddingRight: "35px" }}>From: </label>
          <TextField
            style={{ width: "80%" }}
            id="outlined-basic"
            name="memoFrom"
            variant="outlined"
          />
        </div>
        <div style={{ paddingTop: "20px" }}>
          <label style={{ paddingRight: "50px" }}>To: </label>
          <TextField
            style={{ width: "80%" }}
            id="outlined-basic"
            name="memoTO"
            variant="outlined"
          />
        </div>
        <div style={{ paddingTop: "20px" }}>
          <label style={{ paddingRight: "40px" }}>Title: </label>
          <TextField
            style={{ width: "80%" }}
            id="outlined-basic"
            name="memoTitle"
            variant="outlined"
          />
        </div>
        <div style={{ paddingTop: "20px" }}>
          <label style={{ paddingRight: "23px" }}>Remark: </label>
          <TextField
            style={{ width: "80%" }}
            id="outlined-basic"
            name="memoRemark"
            variant="outlined"
          />
        </div>
        <div style={{ paddingTop: "20px" }}>
          <UploadButton />
        </div>
        <div style={{ paddingTop: "20px" }}>
          <Button variant="contained" onClick={e => this.handleSubmit}>Submit</Button>
        </div>
      </div>
    );
  }
}

export default Form;
