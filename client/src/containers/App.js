import { Route, Router } from "react-router";

import About from "./About";
import Contact from "./Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "./Home";
import Landing from "./Landing";
import React from "react";
import Resources from "./Resources";
import LogIn from "./LogIn";
import LogOut from "./LogOut";
import SignUp from "./SignUp";
import { connect } from "react-redux";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    const isLoggedIn = this.props.token;
    return (
      <div className="app">
        <Router history={history}>
          <Header />
          {isLoggedIn ? (
            <Route exact path="/" component={Home} />
          ) : (
            <Route exact path="/" component={Landing} />
          )}
          <Route path="/about" component={About} />
          <Route path="/signup" component={SignUp} />
          <Route path="/resources" component={Resources} />
          <Route path="/login" component={LogIn} />
          <Route path="/logout" component={LogOut} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.token,
    user: state.user
  };
}

export default connect(mapStateToProps)(App);
