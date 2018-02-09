import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import * as actions from '../../shared/app/redux/actions/actions'


import GlobalHeader from './../GlobalHeader/GlobalHeader.jsx';
import GlobalFooter from './../GlobalFooter/GlobalFooter.jsx';
import Cm02ContentTile from "../../components/Cm02ContentTile/Cm02ContentTile.jsx";
import Cm01RichText from "../../components/Cm01RichText/Cm01RichText.jsx";
import HeaderLandingBanner from "../../components/HeaderLandingBanner/HeaderLandingBanner.jsx";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs.jsx";
import ClinicNearYouMini from "../../components/ClinicNearYou/ClinicNearYouMini.jsx";
import ContentHeader from "../../components/ContentHeader/ContentHeader.jsx";
import Cm02bContentTile from "../../components/Cm02bContentTile/Cm02bContentTile.jsx";
import Cm02ContentTileThree from "../../components/Cm02ContentTileThree/Cm02ContentTileThree.jsx";
import Cm28SocialShare from "../../components/Cm28SocialShare/Cm28SocialShare.jsx";

import axios from 'axios';
import BrochureDownload from "../../components/BrochureDownload/BrochureDownload.jsx";



class HearingAidVsCochlearImplant extends Component {
    static fetchData({ store, params }) {
        return store.dispatch(actions.getHearingAidVsImplantableSolutions());
    }
    componentDidMount() {
        if (navigator.geolocation) {

                        console.log('test4 ', this.props);
                        navigator.geolocation.getCurrentPosition((position) => {
                            console.log('test222');
                            //this.setState({ lat: position.coords.latitude, lng: position.coords.longitude});
                            //console.log(this.mapDispatchToProps);

                            this.props.getCurrentPosition({ lat: position.coords.latitude, lng: position.coords.longitude});



                            console.log('this.state is ', this.state);

                        });
                    }

                    const url = 'https://api.myjson.com/bins/h0g21';

                    console.log('HERE WE GO 1 ..............');

                    axios.get(url)
                    .then(res => {
                        console.log('RES ', res);
                        return res.data;
                    })
                    .then(data => {
                        //this.setState({ markers: data });
                        console.log('HERE WE GO 2 ..............');
                        this.props.updateMarkers({ markers: data});
                    });


                    // GET CITY


                    console.log('HERE WE GOJSON!!!!!!!!!!!!  !!! ..............');

                    const url2 = 'https://freegeoip.net/json/';

                            console.log('HERE WE GOJSON ..............');

                            axios.get(url2)
                            .then(res => {
                                console.log('RES JSON ', res.data.city);
                                this.props.updateCity({ city: res.data.city});

                                return res.data.city;
                            });




                    // let testdata = [{"lat":"-33.815000","lng":"151.001111","text":"Prince Alfred Audiology","address":"23 Macquarie Street, Parramatta 2037","number":"0459 576 289","email":"paa@tech.com","hours":"Mon to Fri - 9am to 5.30pm"},{"lat":"-33.876927","lng":"151.219254","text":"Neurosensory Centre","address":"52 Finton Street, Surrey Hills 2008","number":"0459 834 229","email":"neurocent@gmail.com","hours":"Mon to Fri - 9am to 5.30pm"},{"lat":"-33.635113","lng":"151.147842","text":"Precision hearing","address":"52 Finton Street, Surrey Hills 2008","number":"0459 129 784","email":"precision@hearing.com","hours":"Mon to Fri - 9am to 5.30pm"},{"lat":"-12.439206","lng":"130.933685","text":"Hearing NT","address":"27 Berrimah Road, Berrimah 8083","number":"0459 779 784","email":"precision@hearing.com","hours":"Mon to Fri - 9am to 5.30pm"},{"lat":"-12.460327","lng":"130.841331","text":"Darwin Hearing Centre","address":"81 Knuckey Street, Darwin 8003","number":"0459 129 784","email":"darwinhearing@mailto.com","hours":"Mon to Fri - 9am to 5.30pm"},{"lat":"-12.484128","lng":"131.040802","text":"Precision hearing","address":"39 Derwen Avenue, Howard Springs 8074","number":"0459 863 184","email":"precision@hearing.com","hours":"Mon to Fri - 9am to 5.30pm"}];
                    // this.props.updateMarkers({ markers: testdata});

    }

    render() {

        let getData = this.props.dataHearingAidVsImplantableSolutions;

        let json = {
            "breadcrumbs": [{ title: "Home", link:'/intl/home' },
                { title: "Treating hearing hoss", link: '/intl/treating-hearing-loss' },
                { title: "Types of treatment", link: '/intl/types-of-treatment'},
                { title: "Hearing aids vs implantable solutions", link: '/intl/hearing-aids-vs-implantable-solutions'}
            ]
        };

        return (
            <div className="l-layout l-two-column cf">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{getData['title']}</title>
                    <meta name="title" content={getData['title']} />
                    <meta name="description" content={getData['description']} />
                    <meta name="keywords" content="Hearing aids for children,Sensorineural hearing loss in children,Conductive hearing loss in children,Single sided deafness in children,hearing aids,unilateral hearing loss in children,hearing loss in one ear" />
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

                                <Cm02bContentTile title={getData['cm02b-title-01']}
                                                  body={getData['cm02b-description-01']}
                                                  image={'https://auth.cochlear.com/'+getData['cm02b-image-01'].src}/>

                                <Cm01RichText body={getData['video-embed']}/>

                                <Cm02ContentTileThree additionalClass="sl__testimonials"
                                                      ctaText="View All"
                                                      ctaLink="/intl/testimonials"
                                                      ctaClass="cta__view-all"

                                                      title01 = {getData['cm02-title-03-01'].title}
                                                      description01 = {getData['cm02-description-03-01']}
                                                      path01 = {getData['cm02-title-03-01'].path}
                                                      image01 = {'https://auth.cochlear.com/'+getData['cm02-image-03-01'].src}
                                                      embed01 = {getData['cm02-video-embed-03-01']}
                                                      additionalClass01 = "is-small"

                                                      title02 = {getData['cm02-title-03-02'].title}
                                                      description02 = {getData['cm02-description-03-02']}
                                                      path02 = {getData['cm02-title-03-02'].path}
                                                      image02 = {'https://auth.cochlear.com/'+getData['cm02-image-03-02'].src}
                                                      embed02 = {getData['cm02-video-embed-03-02']}
                                                      additionalClass02 = "is-small"

                                                      title03 = {getData['cm02-title-03-03'].title}
                                                      description03 = {getData['cm02-description-03-03']}
                                                      path03 = {getData['cm02-title-03-03'].path}
                                                      image03 = {'https://auth.cochlear.com/'+getData['cm02-image-03-02'].src}
                                                      embed03 = {getData['cm02-video-embed-03-03']}
                                                      additionalClass03 = "is-small"
                                />

                                <BrochureDownload title="Download a Brochure"
                                                  description="This is description"
                                                  additionalClass="brochure-download"/>


                                <ClinicNearYouMini title="Clinics near"
                                                   description=""
                                                   additionalClass="is-shaded"
                                                   label=""
                                                   city={this.props.city}
                                                   markers={this.props.markers}
                                                   test={this.test}
                                                   lat={this.props.lat}
                                                   lng={this.props.lng}
                                                   path={'/intl/find-a-clinic'}
                                                   getCurrentPosition={this.props.getCurrentPosition} />

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
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(HearingAidVsCochlearImplant);
