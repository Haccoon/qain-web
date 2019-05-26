import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { compose } from "recompose";
import { withRouter } from "react-router";

import * as appActions from "../redux/reducers/app";

class Landing extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
  }


  componentWillUnmount = () => {

  }

  componentWillReceiveProps = (nextProps) => {
  }

  render() {
    return (
      <div className="Landing">
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(appActions, dispatch),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Landing);
