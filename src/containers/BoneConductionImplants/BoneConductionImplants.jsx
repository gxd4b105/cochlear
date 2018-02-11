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
import ContentHeader from "../../components/ContentHeader/ContentHeader.jsx";
import RelatedContent from "../../components/RelatedContent/RelatedContent.jsx";
import MediaContainer from "../../components/MediaContainer/MediaContainer.jsx";

if (typeof window === 'undefined') {
    global.window = {}
}

class BoneConductionImplants extends Component {
    static fetchData({ store, params }) {
        return store.dispatch(actions.getBoneConductionImplants());
    }

    componentDidMount() {
    }


    render() {
        let getData = this.props.dataBoneConductionImplants;
        let json = {
            "breadcrumbs": [{ title: "Home", link:'/intl/home' },
                            { title: "Hearing Loss", link: '/intl/hearing-loss' },
                            { title: "Impact of hearing loss", link: '/intl/impact-hearing-loss'},
                            { title: "Talking to your family about hearing loss", link: '/intl/talking-family-hearing-loss'}
            ]
        };

        return (
            <div className="l-layout l-one-column cf">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{getData['title']}</title>
                    <meta name="title" content={getData['title']} />
                    <meta name="description" content={getData['description']} />
                    <meta name="keywords" content="Hearing aids for children,Sensorineural hearing loss in children,Conductive hearing loss in children,Single sided deafness in children,hearing aids,unilateral hearing loss in children,hearing loss in one ear" />
                    <link rel="canonical" href="http://www.cochlear.com/wps/wcm/connect/intl/home/understand/my-child-has-hl" />
                </Helmet>

                <GlobalHeader title={this.props.headerTitle} country={this.props.headerCountry} countryParams={this.props.match.params.country} countryUpdate = 'false' />

                <HeaderLandingBanner title={getData['title']}
                                     description={getData['description']}
                                     image={'https://auth.cochlear.com/'+getData['banner-image'].src}
                                     imagePath={getData['banner-image'].alt}
                                     additionalClass=""/>

                <BreadCrumbs jsonData={json} />

                <div className='l-content-container cf l-padding'>

                    <main id="main" tabIndex="-1" role="main" className="l-main">
                        <article className="l-content-column">

                            <Cm01RichText body={getData['body-copy']}/>

                            <MediaContainer
                              captionText={getData['media-container-caption-01']}
                              imageLink={'https://auth.cochlear.com/'+getData['media-container-image-01'].src}
                              embedVideo={getData['media-container-embed-01']}
                              />

                        </article>

                    </main>

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
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(BoneConductionImplants);
