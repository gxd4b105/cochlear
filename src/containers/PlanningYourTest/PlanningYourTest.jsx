import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import * as actions from '../../shared/app/redux/actions/actions'

import GlobalHeader from './../GlobalHeader/GlobalHeader.jsx';
import GlobalFooter from './../GlobalFooter/GlobalFooter.jsx';
import Cm01RichText from "../../components/Cm01RichText/Cm01RichText.jsx";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs.jsx";
import HeaderLandingBanner from "../../components/HeaderLandingBanner/HeaderLandingBanner.jsx";
import ContentHeader from "../../components/ContentHeader/ContentHeader.jsx";


class PlanningYourTest extends Component {
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
                    <title>Planning Your Test</title>
                </Helmet>
                <GlobalHeader title={this.props.headerTitle} country={this.props.headerCountry} countryParams={this.props.match.params.country} countryUpdate = 'false' />
                <BreadCrumbs/>
                <article>
                    <HeaderLandingBanner title=""
                                         description=""
                                         image="https://auth.cochlear.com//wps/wcm/connect/dd2107e8-0708-4a4c-9fb9-1bcc1b82be49/CHILD_SWITCH-ON_1_RGB.jpg?MOD=AJPERES&amp;CVID="
                                         imagePath="/in"
                                         additionalClass="is-dark"/>

                    <div className='l-content-container cf l-padding'>
                        <div className="l-content-column">
                            <main id="main" tabIndex="-1" role="main" className="l-main">
                                <ContentHeader title="Planning Your Test"
                                               description="If you need to confirm a hearing loss, you can empower yourself by knowing what to expect at your first appointment with an audiologist" />
                                <Cm01RichText body=" "/>
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
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(PlanningYourTest);
