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
import Cm02bContentTile from "../../components/Cm02bContentTile/Cm02bContentTile.jsx"


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
                    
                    const url = 'https://api.myjson.com/bins/12k2w9';
            
                    console.log('HERE WE GO 1 ..............');
                    
                    fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        //this.setState({ markers: data });
                        console.log('HERE WE GO 2 ..............');
                        this.props.updateMarkers({ markers: data});
                    });

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

                            <ClinicNearYouMini title="Clinics near"
                                           description=""
                                            additionalClass="is-shaded"
                                            label=""
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
