import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import * as actions from '../../shared/app/redux/actions/actions'

var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;

import GlobalHeader from './../GlobalHeader/GlobalHeader.jsx';
import GlobalFooter from './../GlobalFooter/GlobalFooter.jsx';
import Cm02ContentTile from "../../components/Cm02ContentTile/Cm02ContentTile.jsx";
import Cm01RichText from "../../components/Cm01RichText/Cm01RichText.jsx";
import HeaderLandingBanner from "../../components/HeaderLandingBanner/HeaderLandingBanner.jsx";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs.jsx";
import ClinicNearYou from "../../components/ClinicNearYou/ClinicNearYou.jsx";


class HearingAidVsCochlearImplant extends Component {
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
                    <HeaderLandingBanner title="Hearing Aid vs Cochlear Implant"
                                         description="A cochlear implant is an electronic medical device that does the work of damaged parts of the inner ear (cochlea) to provide sound signals to the brain."
                                         additionalClass="is-dark"/>
                    <div className='l-content-container cf l-padding'>
                        <div className="l-content-column">
                            <Cm01RichText/>
                            <div className="sl">
                                <div className="sl-list has-2-items">
                                    <div className="sl-item">
                                        <Cm02ContentTile    title="Stats and Proofs"
                                                            description="Read on Statistics and Proofs of implanrs"
                                                            path="/intl/stats-and-proofs"
                                                            additionalClass="is-shaded is-small"/>
                                    </div>
                                    <div className="sl-item">
                                        <Cm02ContentTile    title="Download Brochures"
                                                            description="Download a brochures od Cochlear's products"
                                                            path="/intl/download-brochures"
                                                            additionalClass="is-shaded is-small"/>
                                    </div>
                                </div>
                            </div>

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
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(HearingAidVsCochlearImplant);
