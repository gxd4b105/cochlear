import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import * as actions from '../../shared/app/redux/actions/actions'

import GlobalHeader from './../GlobalHeader/GlobalHeader.jsx';
import GlobalFooter from './../GlobalFooter/GlobalFooter.jsx';
import Cm02ContentTile from "../../components/Cm02ContentTile/Cm02ContentTile.jsx";

class HomePage extends Component {
    static fetchData({ store, params }) {
        return store.dispatch(actions.getHome());
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Home Page</title>
                </Helmet>
                <GlobalHeader title={this.props.headerTitle} country={this.props.headerCountry} countryParams={this.props.match.params.country} countryUpdate = 'false' />
                <div className='l-content-container cf l-padding'>
                    <Cm02ContentTile    title="Treating hearing loss"
                                        description="Find out what treatment options are available to manage hearing loss"
                                        image="https://auth.cochlear.com//wps/wcm/connect/dd2107e8-0708-4a4c-9fb9-1bcc1b82be49/CHILD_SWITCH-ON_1_RGB.jpg?MOD=AJPERES&amp;CVID="
                                        path="/intl/treating-hearing-loss"
                                        additionalClass="is-shaded is-large"/>

                    <Cm02ContentTile    title="Hearing loss"
                                        description="Learn more about the different degrees and types of hearing loss."
                                        image="https://auth.cochlear.com/wps/wcm/myconnect/8f687f04-3032-46f6-8753-fcf767978216/GettyImages-753288525_super.jpg?MOD=AJPERES&amp;CVID="
                                        path="/intl/hearing-loss"
                                        additionalClass="is-shaded is-large"/>

                </div>
                <GlobalFooter title={this.props.footerTitle} country={this.props.footerCountry} countryParams={this.props.match.params.country} countryUpdate = 'false' />
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
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(HomePage);
