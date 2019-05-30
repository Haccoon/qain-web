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
      <AppBar position="fixed" style={{ backgroundColor: "#4297ff" }}>
        <Toolbar>
          <div style={{ marginRight: "50px", width: "97px", height: "35px" }}>
            <img src="/logo@3x.png" style={{ maxWidth: "100%" }} />
          </div>
          <div style={{ flexGrow: 1 }}>
            <Button color="inherit">
              Question
            </Button>
            <Button color="inherit">
              Answer
            </Button>
            <Button color="inherit">
              Notice
            </Button>
            <Button color="inherit">
              Info
            </Button>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* 언어 설정 */}
            <div style={{ width: "14px", height: "14px" }}>
              <img src="/icon-language@3x.png" style={{ maxWidth: "100%" }} />
            </div>
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
          <Button color="inherit" style={{ background: "#ff7700", boxShadow: "0 6px 7px 0 rgba(74, 45, 19, 0.2)", padding: "5px 25px 5px 25px", borderRadius: "25px" }}>
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
