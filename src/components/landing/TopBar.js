import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { compose } from "recompose";
import { withRouter } from "react-router";
import { Container, Grid, Button } from "@material-ui/core"
import * as appActions from "../../redux/reducers/app";

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

const TopBar = (props) => {
  const { nothing } = props;

  const handleClose = () => {
  }

  const handleSelectContact = (contact) => {
  }

  return (
    <Grid container spacing={10} justify="center" direction="row" alignItems="center" style={{ padding: "30px" }}>
      <Grid item>
        <Grid container justify="center" direction="column">
          <Grid item style={styles.titleText}>
            고객의 평점
          </Grid>
          <Grid item style={styles.contentText}>
            3.4/5
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justify="center" direction="column">
          <Grid item style={styles.titleText}>
            답변수
          </Grid>
          <Grid item style={styles.contentText}>
            5
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justify="center" direction="column">
          <Grid item style={styles.titleText}>
            답변을 기다리는 사람
          </Grid>
          <Grid item style={styles.contentText}>
            64
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button color="inherit" style={styles.button}>
          질문 또는 링크 추가
        </Button>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
