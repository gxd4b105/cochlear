import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import * as actions from '../../shared/app/redux/actions/actions'

import GlobalHeader from './../GlobalHeader/GlobalHeader.jsx';
import GlobalFooter from './../GlobalFooter/GlobalFooter.jsx';
import Cm02ContentTile from "../../components/Cm02ContentTile/Cm02ContentTile.jsx";
import Cm01RichText from "../../components/Cm01RichText/Cm01RichText.jsx";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs.jsx";
import HeaderLandingBanner from "../../components/HeaderLandingBanner/HeaderLandingBanner.jsx";


class TreatingHearingLoss extends Component {
    static fetchData({ store, params }) {
        return store.dispatch(actions.getHome());
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="l-layout l-one-column cf">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Treating Hearing Loss</title>
                </Helmet>
                <GlobalHeader title={this.props.headerTitle} country={this.props.headerCountry} countryParams={this.props.match.params.country} countryUpdate = 'false' />
                <BreadCrumbs/>
                <article>
                    <HeaderLandingBanner title="Treating Hearing Loss"
                                         description="Act early and discuss all your options with a health professional."
                                         additionalClass="is-dark"/>
                    <div className='l-content-container cf l-padding'>
                        <div className="l-content-column">
                            <main id="main" tabIndex="-1" role="main" className="l-main">
                                <Cm01RichText/>
                                <div className="sl">
                                    <div className="sl-list has-4-items">
                                        <div className="sl-item">
                                            <Cm02ContentTile    title="Arnold's Story"
                                                                description="Sudden single-sided deafness left musician Arnold feeling lonely and disconnected from his passions. Discover how a Baha® implant restored his love of life"
                                                                path="http://www.cochlear.com/wps/wcm/connect/intl/home/understand/i-have-hl/hearing-stories-from-recipients/arnolds-story"
                                                                image="http://www.cochlear.com/wps/wcm/connect/74da8ac9-735b-4fb8-a41e-1bff9726f7dc/EN-Testimonial-Baha-Arnold-and-wife-210x140.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-74da8ac9-735b-4fb8-a41e-1bff9726f7dc-l5rBD5G"
                                                                additionalClass="is-shaded is-small" />
                                        </div>
                                        <div className="sl-item">
                                            <Cm02ContentTile    title="Bronwyn's story"
                                                                description="Bronwyn suffered from high-frequency hearing loss. Discover how the unique Hybrid™ electro-acoustic system improved her speech understanding and appreciation of music."
                                                                image="http://www.cochlear.com/wps/wcm/connect/67fc39c5-b064-421a-aa5d-8f623558b756/testimonial_electroacoustic_hybrid_bronwynleggate_240x140.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-67fc39c5-b064-421a-aa5d-8f623558b756-jB186lj"
                                                                path="http://www.cochlear.com/wps/wcm/connect/intl/home/understand/i-have-hl/hearing-stories-from-recipients/bronwyns-story"
                                                                additionalClass="is-shaded is-small" />
                                        </div>
                                        <div className="sl-item">
                                            <Cm02ContentTile    title="Jude's story"
                                                                description="Jude was struck with sudden deafness in both ears just before his 50th birthday. Learn how a cochlear implant restored his ability to communicate with his friends, family and colleagues."
                                                                path="http://www.cochlear.com/wps/wcm/connect/intl/home/understand/i-have-hl/hearing-stories-from-recipients/judes-story"
                                                                image="http://www.cochlear.com/wps/wcm/connect/b25adb27-f84e-46a3-b684-b80d24122120/testimonial_cochlearimplant_judedemello_210x140.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-b25adb27-f84e-46a3-b684-b80d24122120-l5rFEoh"
                                                                additionalClass="is-shaded is-small" />
                                        </div>
                                        <div className="sl-item">
                                            <Cm02ContentTile    title="Bob's story"
                                                                description="Bob said he didn’t know how good life would be after a cochlear implant. Read about the changes he’s noticed since treating his hearing loss."
                                                                image="http://www.cochlear.com/wps/wcm/connect/0023d13c-be36-439c-ba68-8834b0f8b0ef/testimonial_bobmillar_210x140.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-0023d13c-be36-439c-ba68-8834b0f8b0ef-l3RwDzL"
                                                                path="http://www.cochlear.com/wps/wcm/connect/intl/home/understand/i-have-hl/hearing-stories-from-recipients/bobs-story"
                                                                additionalClass="is-shaded is-small" />
                                        </div>
                                    </div>
                                </div>
                                <Cm02ContentTile    title="Hearing Aid vs Cochlear Implant"
                                                    description="A cochlear implant is an electronic medical device that does the work of damaged parts of the inner ear (cochlea) to provide sound signals to the brain."
                                                    path="/intl/hearing-aid-vs-cochlear-implant"
                                                    image="http://www.cochlear.com/wps/wcm/connect/ce8cb1a1-4fc8-47a8-a84e-8f59b646aa1e/lifestyle_cochlearimplant_motherandyounggirl_300x300.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-ce8cb1a1-4fc8-47a8-a84e-8f59b646aa1e-jB18lfj"
                                                    additionalClass="is-shaded is-large"/>
                            </main>
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
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(TreatingHearingLoss);