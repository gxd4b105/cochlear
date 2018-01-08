import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderLandingBanner from './HeaderLandingBanner/HeaderLandingBanner.jsx'
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import * as actions from '../shared/app/redux/actions/user-actions'

class Body extends Component {
    static fetchData() {
        console.log('test fetch. This does nothing at the moment');
    }
    componentDidMount() {
        this.props.getHome();
    }
    render() {
        return (
            <div>
            <HeaderLandingBanner title={this.props.bodyTitle} />

            <Link className="nav-item-title" to="/intl/secondpage">
            Home <span className="sub-text">This links to the homepage</span>
        </Link>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        ...state.user,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Body);