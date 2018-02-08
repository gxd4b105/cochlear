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
import Cm28SocialShare from "../../components/Cm28SocialShare/Cm28SocialShare.jsx";
import RelatedContent from "../../components/RelatedContent/RelatedContent.jsx";
import BrochureDownload from "../../components/BrochureDownload/BrochureDownload.jsx";
import MediaContainer from "../../components/MediaContainer/MediaContainer.jsx";

if (typeof window === 'undefined') {
    global.window = {}
}


class ForNoisyEnvironments extends Component {
    static fetchData({ store, params }) {
        return store.dispatch(actions.getForNoisyEnvironments());
    }

    componentDidMount() {
    }


    render() {

        console.log(this.props.dataForNoisyEnvironments);
        let getData = this.props.dataForNoisyEnvironments;

        let json = {
            "breadcrumbs": [{   title: "Home", link:'/intl/home' },
                {   title: "Hearing Loss", link: '/intl/hearing-loss' },
                {   title: "Impact of hearing loss", link: '/intl/impact-hearing-loss'},
                {   title: "Impact of hearing loss on daily life", link: '/intl/untreadted-hearing-loss-adult'}
            ]
        };

        console.log(global.window.dataLayer);

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
                            <Cm28SocialShare />

                            <Cm01RichText body={getData['body-copy']}/>

                              <MediaContainer
                                captionText={getData['media-container-caption-01']}
                                imageLink={getData['media-container-image-01']}
                                embedVideo={getData['media-container-embed-01']}
                                />

                            <BrochureDownload
                              title="Request additional information"
                              description="Fill in your details below if you'd like us to send you more information about implantable solutions."
                              additionalClass="brochure-download"
                            />


                        </article>
                    </main>

                </div>

                {/*<RelatedContent   additionalClass="sl__related-articles"

                                  title01 = {getData['related-title-01'].title}
                                  description01 = {getData['related-description-01']}
                                  path01 = {getData['related-title-01'].path}
                                  image01 = {'https://auth.cochlear.com/'+getData['related-image-01'].src}
                                  embed01 = {getData['related-video-embed-01']}
                                  additionalClass01 = "is-small"

                                  title02 = {getData['related-title-02'].title}
                                  description02 = {getData['related-description-02']}
                                  path02 = {getData['related-title-02'].path}
                                  image02 = {'https://auth.cochlear.com/'+getData['related-image-02'].src}
                                  embed02= {getData['related-video-embed-02']}
                                  additionalClass02 = "is-small"

                                  title03 = {getData['related-title-03'].title}
                                  description03 = {getData['related-description-03']}
                                  path03 = {getData['related-title-03'].path}
                                  image03 = {'https://auth.cochlear.com/'+getData['related-image-03'].src}
                                  embed03 = {getData['related-video-embed-03']}
                                  additionalClass03 = "is-small"
                />*/}

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
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(ForNoisyEnvironments);
