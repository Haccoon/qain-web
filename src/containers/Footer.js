import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { compose } from "recompose";
import { withRouter } from "react-router";

import Typography from '@material-ui/core/Typography';

import * as appActions from "../redux/reducers/app";

class Footer extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  onNavItemClicked = (route) => {

  };

  render() {
    return (
      <Typography variant="caption" display="block" gutterBottom>
        Copyright © 2019 Qain Inc. All rights reserved.
      </Typography>
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
)(Footer);
