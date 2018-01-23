import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import * as actions from '../../shared/app/redux/actions/actions'

import GlobalHeader from './../GlobalHeader/GlobalHeader.jsx';
import GlobalFooter from './../GlobalFooter/GlobalFooter.jsx';

import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs.jsx";
import ClinicNearYou from "../../components/ClinicNearYou/ClinicNearYou.jsx";
import ContentHeader from "../../components/ContentHeader/ContentHeader.jsx";
import Cm01RichText from "../../components/Cm01RichText/Cm01RichText.jsx";

import axios from 'axios';

class FindAClinic extends Component {
    static fetchData({ store, params }) {
        return store.dispatch(actions.getHome());
    }

    componentWillMount() {
        //this.setState({ markers: [], lat: -32, lng: 151, label: '' });
        //store.dispatch(actions.getHome());

	}

    componentDidMount() {

        const url2 = 'https://freegeoip.net/json/';
        
                console.log('HERE WE GOJSON ..............');
                
                axios.get(url2)
                .then(res => {
                    console.log('RES JSON ', res.data.city);
                    this.props.updateCity({ city: res.data.city});

                    return res.data.city;
                });



console.log('test1');

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
        return (
            <div className="l-layout l-two-column cf">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Heading Aid vs Cochlear Implant</title>
                </Helmet>
                <GlobalHeader title={this.props.headerTitle} country={this.props.headerCountry} countryParams={this.props.match.params.country} countryUpdate = 'false' />
                <BreadCrumbs/>
                <article>
                    <div className='l-content-container cf l-padding'>
                        <div className="l-content-column">
                            <ContentHeader title="Find a Clinic"
                                           description=""/>
                            <ClinicNearYou  title="Find your nearest clinic"
                                            description="Type in your postcode to find a Cochlear Clinic that is nearest to you."
                                            additionalClass="is-shaded is-medium"
                                            isLoggedIn={this.props.isLoggedIn}
                                            lat={this.props.lat}
                                            lng={this.props.lng}
                                            label=""
                                            city={this.props.city}
                                            markers={this.props.markers}
                                            test={this.test}
                                            getCurrentPosition={this.props.getCurrentPosition}/>
                        </div>
                    </div>
                </article>
                <GlobalFooter title={this.props.footerTitle} country={this.props.footerCountry} countryParams={this.props.match.params.country} countryUpdate = 'false' />
            </div>
        );
    }
}
function mapStateToProps(state) {
    console.log('AAAA ', state);
    return {
        ...state.user,
    }
}
function mapDispatchToProps(dispatch) {
    console.log('we have dipsatch ', dispatch);
    return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(FindAClinic);
