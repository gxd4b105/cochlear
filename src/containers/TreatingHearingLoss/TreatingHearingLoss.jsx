import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import * as actions from '../../shared/app/redux/actions/actions'

import GlobalHeader from './../GlobalHeader/GlobalHeader.jsx';
import GlobalFooter from './../GlobalFooter/GlobalFooter.jsx';
import Cm02ContentTile from "../../components/Cm02ContentTile/Cm02ContentTile.jsx";
import Cm01RichText from "../../components/Cm01RichText/Cm01RichText.jsx";
import ContentHeader from "../../components/ContentHeader/ContentHeader.jsx";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs.jsx";


class Home extends Component {
    static fetchData({ store, params }) {
        return store.dispatch(actions.getHome());
    }

    componentDidMount() {
    }

    render() {
        if(this.props.match.params.country === this.props.headerCountry){
            return (
                <div className="l-layout l-three-column cf">
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>Treating Hearing Loss</title>
                    </Helmet>
                    <GlobalHeader title={this.props.headerTitle} country={this.props.headerCountry} countryParams={this.props.match.params.country} countryUpdate = 'false' />
                    <BreadCrumbs/>
                    <div className='l-content-container cf l-padding'>
                        <article className="l-content-column">
                            <main id="main" tabIndex="-1" role="main" className="l-main">
                                <ContentHeader title="Treating Hearing Loss"/>
                                <Cm01RichText/>
                                <Cm02ContentTile    title="Hearing Aid vs Cochlear Implant"
                                                    description="A cochlear implant is an electronic medical device that does the work of damaged parts of the inner ear (cochlea) to provide sound signals to the brain."
                                                    path="/intl/hearing-aid-vs-cochlear-implant"
                                                    image="http://www.cochlear.com/wps/wcm/connect/ce8cb1a1-4fc8-47a8-a84e-8f59b646aa1e/lifestyle_cochlearimplant_motherandyounggirl_300x300.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-ce8cb1a1-4fc8-47a8-a84e-8f59b646aa1e-jB18lfj"
                                                    additionalClass="is-shaded is-large"/>
                            </main>
                        </article>
                    </div>
                    <GlobalFooter title={this.props.footerTitle} country={this.props.footerCountry} countryParams={this.props.match.params.country} countryUpdate = 'false' />
                </div>
            );
        } else {
            return (
                <div className="l-layout l-three-column cf">
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>Treating Hearing Loss</title>
                    </Helmet>
                    <GlobalHeader title={this.props.headerTitle} country={this.props.headerCountry} countryParams={this.props.match.params.country} countryUpdate = 'false' />
                    <BreadCrumbs/>
                    <div className='l-content-container cf l-padding'>
                        <article className="l-content-column">
                            <main id="main" tabIndex="-1" role="main" className="l-main">
                                <ContentHeader title="Treating Hearing Loss"/>
                                <Cm01RichText/>
                                <Cm02ContentTile    title="Hearing Aid vs Cochlear Implant"
                                                    description="A cochlear implant is an electronic medical device that does the work of damaged parts of the inner ear (cochlea) to provide sound signals to the brain."
                                                    path="/intl/hearing-aid-vs-cochlear-implant"
                                                    image="http://www.cochlear.com/wps/wcm/connect/ce8cb1a1-4fc8-47a8-a84e-8f59b646aa1e/lifestyle_cochlearimplant_motherandyounggirl_300x300.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-ce8cb1a1-4fc8-47a8-a84e-8f59b646aa1e-jB18lfj"
                                                    additionalClass="is-shaded is-large"/>
                            </main>
                        </article>
                    </div>
                    <GlobalFooter title={this.props.footerTitle} country={this.props.footerCountry} countryParams={this.props.match.params.country} countryUpdate = 'false' />
                </div>
            );
        }
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
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Home);
