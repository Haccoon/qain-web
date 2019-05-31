import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { compose } from "recompose";
import { withRouter } from "react-router";
import { Container, Grid, Button, Paper, Divider, Checkbox, FormControlLabel } from "@material-ui/core"
// import * as appActions from "../../redux/reducers/app";

const styles = {
  titleText: {
    fontSize: "16px",
    color: "#333333",
    textAlign: "left"
  },
  contentText: {
    fontSize: "54px",
    fontWeight: 600,
    textAlign: "left",
    color: "#333333",
  },
  button: {
    boxShadow: "0 6px 9px 0 rgba(3, 104, 154, 0.28)",
    borderRadius: "8px",
    backgroundColor: "#4297ff",
    padding: "10px 60px 10px 60px",
    color: "white",
    fontWeight: 500,
  }
}

const FilterCard = (props) => {
  const { nothing } = props;

  const handleClose = () => {
  }

  const handleSelectContact = (contact) => {
  }

  return (
    <Paper style={{ width: "244px", height: "330px", padding: "20px" }}>
      <div style={{ fontSize: "20px", fontWeight: "bold", color: "#333333" }}>
        필터
      </div>
      <Divider style={{ margin: "20px auto 20px auto" }} />
      <div style={{ fontSize: "14px", fontWeight: 500, color: "#333333" }}>
        카테고리
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ width: "60%" }}>
          <FormControlLabel
            control={
              <Checkbox
                value="checkedB"
                color="primary"
              />
            }
            label="피드"
            style={{ fontSize: "14px", color: "#666666" }}
          />
        </div>
        <div style={{ width: "40%", textAlign: "right", fontSize: "14px", color: "#4297ff" }}>254</div>
      </div>
    </Paper>
  );
};

const mapStateToProps = state => ({
  categories: state.app.categories,
});

const mapDispatchToProps = dispatch => ({
  // appActions: bindActionCreators(appActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterCard);
