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
                        <title>Heading Aid vs Cochlear Implant</title>
                    </Helmet>
                    <GlobalHeader title={this.props.headerTitle} country={this.props.headerCountry} countryParams={this.props.match.params.country} countryUpdate = 'false' />
                    <BreadCrumbs/>
                    <div className='l-content-container cf l-padding'>
                        <article className="l-content-column">
                            <main id="main" tabIndex="-1" role="main" className="l-main">
                                <ContentHeader title="Hearing Aid vs Cochlear Implant"/>
                                <Cm01RichText/>
                                <div className="sl">
                                    <div className="sl-list has-2-items">
                                        <div className="sl-item">
                                            <Cm02ContentTile    title="Options for when Hearing Aids no longer work"
                                                                description=""
                                                                path="/intl/treating-hearing-loss"
                                                                additionalClass="is-shaded is-small"/>
                                        </div>
                                        <div className="sl-item">
                                            <Cm02ContentTile    title="More information about Cochlear implants"
                                                                description=""
                                                                path="/intl/treating-hearing-loss"
                                                                additionalClass="is-shaded is-small"/>
                                        </div>
                                    </div>
                                </div>
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
                        <title>Heading Aid vs Cochlear Implant</title>
                    </Helmet>
                    <GlobalHeader title={this.props.headerTitle} country={this.props.headerCountry} countryParams={this.props.match.params.country} countryUpdate = 'false' />
                    <BreadCrumbs/>
                    <div className='l-content-container cf l-padding'>
                        <article className="l-content-column">
                            <main id="main" tabIndex="-1" role="main" className="l-main">
                                <ContentHeader title="Hearing Aid vs Cochlear Implant"/>
                                <Cm01RichText/>
                                <div className="sl">
                                    <div className="sl-list has-2-items">
                                        <div className="sl-item">
                                            <Cm02ContentTile    title="Compare Statistic"
                                                                description=""
                                                                path="/intl/treating-hearing-loss"
                                                                additionalClass="is-shaded is-small"/>
                                        </div>
                                        <div className="sl-item">
                                            <Cm02ContentTile    title="Downloads"
                                                                description=""
                                                                path="/intl/treating-hearing-loss"
                                                                additionalClass="is-shaded is-small"/>
                                        </div>
                                    </div>
                                </div>
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
