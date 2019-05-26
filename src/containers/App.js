import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Landing from '../components/Landing';
import Header from "./Header"
import Footer from "./Footer"
import * as routes from "../constants";

const styles = {
  wrapper: {
    display: 'table',
    minHeight: '100%',
    height: '100vh',
    width: '100%',
    backgroundColor: 'white',
  },
  body: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    display: 'table-row',
    height: '60px',
    width: '100%',
  },
  footer: {
    width: '100%',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFEFEF'
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div style={styles.wrapper}>
          <div style={styles.header}>
            <Header />
          </div>
            <div style={styles.body}>
            <Switch>
              <Redirect exact from={routes.LANDING} to={routes.HOME} />
              <Route exact strict path={routes.HOME} component={Landing} />
            </Switch>
          </div>
          <div style={styles.footer}>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
