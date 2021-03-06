import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderLandingBanner from './HeaderLandingBanner/HeaderLandingBanner.jsx'
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import * as actions from '../shared/app/redux/actions/actions'

class Bodythird extends Component {
    static fetchData() {
        console.log('test fetch. This does nothing at the moment');
    }
    componentDidMount() {
        this.props.getHomethird();
    }
    render() {
        return (

            <HeaderLandingBanner title={this.props.bodythirdTitle} />
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
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Bodythird);