import React from "react";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
import About from "./About";
import Contact from "./Contact";
import Landing from "./Landing";
import LogIn from "./LogIn";
import LogOut from "./LogOut";
import SignUp from "./SignUp";
import Resources from "./Resources";
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";

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
        <Route path="/login" component={LogIn} />
        <Route path="/logout" component={LogOut} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </Router>
    );
  }
}

export default App;
