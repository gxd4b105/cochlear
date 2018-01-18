import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import * as actions from '../../shared/app/redux/actions/actions'

import GlobalHeader from './../GlobalHeader/GlobalHeader.jsx';
import GlobalFooter from './../GlobalFooter/GlobalFooter.jsx';

import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs.jsx";
import ClinicNearYou from "../../components/ClinicNearYou/ClinicNearYou.jsx";
import ContentHeader from "../../components/ContentHeader/ContentHeader.jsx";


class ClinicFinder extends Component {
    static fetchData({ store, params }) {
        return store.dispatch(actions.getHome());
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="l-layout l-two-column cf">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Heading Aid vs Cochlear Implant</title>
                </Helmet>
                <GlobalHeader title={this.props.headerTitle} country={this.props.headerCountry} countryParams={this.props.match.params.country} countryUpdate = 'false' />
                <BreadCrumbs/>
                <article>
                    <div className='l-content-container cf l-padding'>
                        <div className="l-content-column">
                            <ContentHeader title="Find a Clinic"
                                           description=""/>
                            <ClinicNearYou  title="Find your nearest clinic"
                                            description="Type in your postcode to find a Cochlear Clinic that is nearest to you."
                                            additionalClass="is-shaded is-medium" />
                        </div>
                    </div>
                </article>
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
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(ClinicFinder);
