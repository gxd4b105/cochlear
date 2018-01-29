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

import axios from 'axios';



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

        console.log(this.props.dataHearingAidVsImplantableSolutions);

        let getData = this.props.dataHearingAidVsImplantableSolutions;

        return (
            <div className="l-layout l-two-column cf">
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

                            <Cm01RichText body={getData['body-copy']}/>

                            <Cm02bContentTile title={getData['cm02b-title-01']}
                                              body={getData['cm02b-description-01']}
                                              image={'https://auth.cochlear.com/'+getData['cm02b-image-01'].src}/>

                            <Cm01RichText body={getData['video-embed']}/>

                            <Cm02ContentTileThree additionalClass="sl__testimonials"
                                                  ctaText="View All"
                                                  ctaLink="/initl/testimonials"
                                                  ctaClass="cta__view-all"

                                                  title01 = "Alexandre's Story"
                                                  description01 = "Alexandre, a 53 year old married father of three. He talks about the things that matter to him most, his family, his work, his love of sports and music and how the Carina System helped change his life for the better."
                                                  path01 = "http://www.cochlear.com/wps/wcm/connect/intl/home/understand/i-have-hl/hearing-stories-from-recipients/bronwyns-story"
                                                  image01 = "https://www.youtube.com/embed/Un8idyyS1UU"
                                                  additionalClass01 = "is-shaded is-small"

                                                  title02 = "Mateo's story"
                                                  description02 = "After learning that their baby boy would never hear, Stéphane and Karla traveled from Mexico to the Johns Hopkins Hospital in the United States for a second opinion. "
                                                  path02 = "http://www.cochlear.com/wps/wcm/connect/intl/home/understand/i-have-hl/hearing-stories-from-recipients/bronwyns-story"
                                                  image02 = "https://www.youtube.com/embed/DO7ohHj-WQw"
                                                  additionalClass02 = "is-shaded is-small"

                                                  title03 = "Jude's story"
                                                  description03 = "Jude was struck with sudden deafness in both ears just before his 50th birthday. Learn how a cochlear implant restored his ability to communicate with his friends, family and colleagues."
                                                  path03 = "http://www.cochlear.com/wps/wcm/connect/intl/home/understand/i-have-hl/hearing-stories-from-recipients/judes-story"
                                                  image03 = "http://www.cochlear.com/wps/wcm/connect/b25adb27-f84e-46a3-b684-b80d24122120/testimonial_cochlearimplant_judedemello_210x140.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-b25adb27-f84e-46a3-b684-b80d24122120-l5rFEoh"
                                                  additionalClass03 = "is-shaded is-small"
                            />


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
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(HearingAidVsCochlearImplant);
