import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { compose } from "recompose";
import { withRouter } from "react-router";
import { Paper, Avatar, Grid, Typography } from "@material-ui/core"
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

const MyQuestionCard = (props) => {
  const { nothing } = props;

  const handleClose = () => {
  }

  const handleSelectContact = (contact) => {
  }

  return (
    <Paper style={{ padding: "20px" }}>
      <div style={{ display: "flex", alignContent: "center" }}>
        <Grid container spacing={2} style={{ width: "30%" }} alignItems="center">
          <Grid item>
           <Avatar />
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="subtitle1">
              신유림님
            </Typography>
            <Typography variant="body2" gutterBottom>
              South Korea
            </Typography>
          </Grid>
          </Grid>
          <div style={{ fontSize: "24px", color: "#999999", width: "70%", textAlign: "center", margin: "auto" }}>
            동길님의 질문 또는 링크는 무엇입니까?
          </div>
        </div>
    </Paper>
  );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MyQuestionCard);
