import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { compose } from "recompose";
import { withRouter } from "react-router";
import { Toolbar, Typography, Button, Menu, MenuItem, withStyles } from '@material-ui/core';
import { FormattedHTMLMessage } from "react-intl";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import * as appActions from "../redux/reducers/app";


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      anchorEl: undefined,
    }
  }

  componentDidMount() {
  }

  onLanguageButtonClicked = (event) => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  }

  handleSelectLanguage = (lang) => {
    this.props.appActions.setUserLanguage(lang)
  }

  render() {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
            QAIN
          </Typography>
          <div>
            {/* 언어 설정 */}
            <Button
              color="inherit"
              onClick={(e) => this.onLanguageButtonClicked(e)}
              aria-owns={Boolean(this.state.anchorEl) ? 'language-menu' : undefined}
              aria-haspopup="true">
              {this.props.siteLanguages[this.props.userSiteLanguage]}
              {Boolean(this.state.anchorEl) ? (<ExpandLess />) : (<ExpandMore />)}
            </Button>
            <StyledMenu id="language-menu" anchorEl={this.state.anchorEl} open={Boolean(this.state.anchorEl)} onClose={this.handleClose}>
              {
                Object.entries(this.props.siteLanguages).map( ([key, value]) => (
                  <MenuItem key={key} onClick={() => this.handleSelectLanguage(key)}>
                    {value}
                  </MenuItem>
                ))
              }
            </StyledMenu>
          </div>
          <Button color="inherit">
            <FormattedHTMLMessage id="header_login_title" />
          </Button>
        </Toolbar>
     </AppBar>
    );
  }
}

const mapStateToProps = state => ({
  account: state.app.account,
  siteLanguages: state.app.siteLanguages,
  userSiteLanguage: state.app.userSiteLanguage,
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
