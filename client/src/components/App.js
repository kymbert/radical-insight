import React from 'react';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from "history";
import LandingPage from './pages/LandingPage';
import ResourcesPage from './pages/ResourcesPage';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

const history = createBrowserHistory();

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <SiteHeader />
                <Route exact path="/" component={LandingPage} />
                <Route path="/resources" component={ResourcesPage} />
                <SiteFooter />
            </Router>
        )
    }
}

export default App;
