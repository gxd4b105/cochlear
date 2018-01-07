import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import RedirectWithStatus from './redirect-w-status.jsx';
import Navbar from './navbar.jsx';
import routeOptions from '../routes/routes';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';

class App extends Component {
    static fetchData({ store, params }) {        
        return Promise.all([Header.fetchData({store}), Footer.fetchData({store})]);
    }

    render() {
        let routes = routeOptions.routes.map(({ path, component, exact }, i) =>
            <Route key={Math.random() + 'ROUTE_'} exact={exact} path={path} component={component} />
        );
        let redirects = routeOptions.redirects.map(({ from, to, status }, i) =>
            <RedirectWithStatus key={Math.random() + 'REDIRECT_'} from={from} to={to} status={status} />
        );
        return (
            <div>
                <Header />
                <Switch>
                    {routes}
                    {redirects}
                </Switch>
                <Footer />
            </div>
        );
    }
}
export default App;