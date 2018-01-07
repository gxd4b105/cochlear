import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import RedirectWithStatus from './redirect-w-status.jsx';
import Navbar from './navbar.jsx';
import routeOptions from '../routes/routes';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';

class App extends Component {
    static fetchData({ store, params }) {
        
                // ok we are in Home, so lets go through each component  we are going to use and call
                // their fetchData to get all fo the data we need for each.
        
                // IN REALITY THE HEADER AND FOOTER WILL ALWAYS BE THERE IN THE MAIN DIV SO THEY WONT
                // BE IN INDIVIDUAL COMPONENTS LIKE HOME.JSX
        
                // TODO - MOVE HEADER AND FOOTER TO SHOW ON LIKE A MAIN.JSX FILE, THEN
                // MAKE ROUTE MATCH COCHLEAR LIKE /INTL/ARTICLEBLAH

                //return 'baladfad';
                
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