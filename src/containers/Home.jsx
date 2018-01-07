import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Body from '../components/Body.jsx';
import * as actions from '../shared/app/redux/actions/user-actions'

class Home extends Component {
    static fetchData({ store, params }) {

        // ok we are in Home, so lets go through each component  we are going to use and call
        // their fetchData to get all fo the data we need for each.

        // IN REALITY THE HEADER AND FOOTER WILL ALWAYS BE THERE IN THE MAIN DIV SO THEY WONT
        // BE IN INDIVIDUAL COMPONENTS LIKE HOME.JSX

        // TODO - MOVE HEADER AND FOOTER TO SHOW ON LIKE A MAIN.JSX FILE, THEN
        // MAKE ROUTE MATCH COCHLEAR LIKE /INTL/ARTICLEBLAH

        return store.dispatch(actions.getHome());
        
        //return Promise.all([Header.fetchData({store}), Footer.fetchData({store})]);
    }

    componentDidMount() {
        this.props.getHeader();
        this.props.getFooter();
    }

    render() {
        return (
            <div>
                <Body />


            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        ...state.home,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Home);
