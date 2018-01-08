import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import RedirectWithStatus from './redirect-w-status.jsx';
import routeOptions from '../routes/routes';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './redux/actions/user-actions'

class App extends Component {
    static fetchData({ store, params }) { 
        console.log('abcdefg');    
        //console.log('MMMMMMMMPr ', params.country, params.country.length);   
        if(!params.country){
            console.log('returning nothing!!!');
            return Promise.all([],[]);
        }
        return Promise.all([Header.fetchData({store, params}), Footer.fetchData({store, params})]);
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
                <Switch>
                    {routes}
                    {redirects}
                </Switch>
            </div>
        );
    }
}

export default App;

function mapStateToProps(state) {
    console.log('APP APP - ', state);
    return {
        ...state.home
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}
//export default connect(mapStateToProps, mapDispatchToProps)(App);
