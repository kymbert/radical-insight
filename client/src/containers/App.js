import { Route, Router } from "react-router";

import About from "./About";
import Contact from "./Contact";
import Footer from "../components/Footer";
import Landing from "./Landing";
import React from "react";
import Resources from "./Resources";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import SignUp from "./SignUp";
import TopNav from "../components/TopNav";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <TopNav />
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/signup" component={SignUp} />
        <Route path="/resources" component={Resources} />
        <Route path="/login" component={SignIn} />
        <Route path="/logout" component={SignOut} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </Router>
    );
  }
}

export default App;
