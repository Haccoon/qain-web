import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { compose } from "recompose";
import { withRouter } from "react-router";
import { Container, Grid, Button, Paper } from "@material-ui/core"
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
    <Paper style={{ width: "254px", height: "340px" }}>
      필터 카드
    </Paper>
  );
};

const mapStateToProps = state => ({
  categories: state.app.categories,
});

const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(appActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterCard);
