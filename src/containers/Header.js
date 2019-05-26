import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { compose } from "recompose";
import { withRouter } from "react-router";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import * as appActions from "../redux/reducers/app";

class Header extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  onNavItemClicked = (route) => {

  };

  render() {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            QAIN
          </Typography>
        </Toolbar>
     </AppBar>
    );
  }
}

const mapStateToProps = state => ({
  account: state.app.account,
});

const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(appActions, dispatch),
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Header);
