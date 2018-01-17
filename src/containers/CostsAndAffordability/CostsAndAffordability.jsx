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
import Cm18Accordian from "../../components/Cm18Accordian/Cm18Accordian.jsx";
import Cm18Accordian__Item from "../../components/Cm18Accordian__Item/Cm18Accordian__Item.jsx";
import ContentHeader from "../../components/ContentHeader/ContentHeader.jsx";


class CostsAndAffordability extends Component {
    static fetchData({ store, params }) {
        return store.dispatch(actions.getCostsAndAffordability());
    }

    componentDidMount() {
    }

    render() {

        console.log(this.props.dataCostsAndAffordability);

        let getData = this.props.dataCostsAndAffordability;

        return (
            <div className="l-layout l-one-column cf">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{getData['title']}</title>
                </Helmet>
                <GlobalHeader title={this.props.headerTitle} country={this.props.headerCountry} countryParams={this.props.match.params.country} countryUpdate = 'false' />
                <BreadCrumbs/>

                <HeaderLandingBanner title=""
                                     description=""
                                     image={'https://auth.cochlear.com/'+getData['banner-image'].src}
                                     imagePath={getData['banner-image'].alt}
                                     additionalClass="is-dark"/>

                <div className='l-content-container cf l-padding'>
                    <article className="l-content-column">
                        <main id="main" tabIndex="-1" role="main" className="l-main">

                            <ContentHeader title={getData['title']}
                                           description={getData['description']} />




                        </main>
                    </article>
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
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(CostsAndAffordability);
