import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { compose } from "recompose";
import { withRouter } from "react-router";
import TopBar from "../components/landing/TopBar"
import { Container, Grid, Button, Divider } from "@material-ui/core"
import axios from 'axios';

import * as appActions from "../redux/reducers/app";
import QuestionCard from '../components/landing/QuestionCard';
import MyQuestionCard from "../components/landing/MyQuestionCard";
import FilterCard from "../components/landing/FilterCard"

const API_URL = "http://104.156.238.171:5000";

class Landing extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    axios.get(`${API_URL}/categories`).then((res) => {
      if (res.status === 200 && res.statusText === "OK") {
        this.props.appActions.setCategories(res.data)
      }
    });
  }


  componentWillUnmount = () => {

  }

  componentWillReceiveProps = (nextProps) => {
  }

  render() {
    return (
      <div className="Landing" style={{ width: "100%", height: "100%", backgroundColor: "#f4f4f4" }}>
        <Container>
          <div style={{ position: "fixed", top: "230px" }}>
            <FilterCard />
          </div>
          <div>
            <TopBar />
            <Divider />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "30px" }}>
            <div style={{ width: "70%" }}>
              <MyQuestionCard />
              <QuestionCard />
            </div>
          </div>
        </Container>
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
