import React from 'react';
import GoogleMapsWrapper from './GoogleMapsWrapper.jsx';
import { Marker } from 'react-google-maps';
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";
import Geosuggest from 'react-geosuggest';
import ReactDOM from 'react-dom';


class ClinicNearYouMini extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 'showDetails': 'show' };
      }

    render() {
        return (

    <section className={`cm cm-subscription-banner ${this.props.additionalClass}`}>
        <div className="l-padding">
            <form className="fn_validate" action="/intl/clinic-finder">
                <div className="fn_validate_summary"></div>
                <fieldset>
                    <div className="title-text-container">
                        <legend>{this.props.title} {this.props.city}</legend>
                        <p>{this.props.description}</p>
                    </div>
                </fieldset>
            </form>
        </div>

     
        <div style={{'width':'50%', 'display': 'inline-block', 'verticalAlign': 'top'}}>
        <ul style={{'listStyle':'none','padding':'0', 'width':'80%'}}>
        {this.props.markers.map((marker) => {



            if(marker.lat){

                console.log('this.props.lat ', this.props.lat);

          let markerDistance = this.getDistance(this.props.lat,this.props.lng,marker.lat,marker.lng);  
          console.log('CAM 11', marker, markerDistance);

    if(markerDistance < 100){

        console.log('CAM 2', marker);
 


   return <li key={marker.lat} ref={marker.lat} onClick={() => this.toggleClinic(marker.lat)} style={{'backgroundColor':'#fff','border':'1px solid #ccc','padding': '20px'}}><strong>{marker.text}</strong><div className={'details show'}>{marker.address} &nbsp; <span style={{'fontSize':'12px'}}>{parseInt(markerDistance)}km</span></div></li>
}

            }

})}
</ul>

</div>
<div><a href={`${this.props.path}`} className="cta">See All Clinics</a></div>


    </section>


        );
    }

      getDistance(lat1, lng1, lat2, lng2, miles) { // miles optional
        if (typeof miles === "undefined"){miles=false;}
        function deg2rad(deg){return deg * (Math.PI/180);}
        function square(x){return Math.pow(x, 2);}
        var r=6371; // radius of the earth in km
        lat1=deg2rad(lat1);
        lat2=deg2rad(lat2);
        var lat_dif=lat2-lat1;
        var lng_dif=deg2rad(lng2-lng1);
        var a=square(Math.sin(lat_dif/2))+Math.cos(lat1)*Math.cos(lat2)*square(Math.sin(lng_dif/2));
        var d=2*r*Math.asin(Math.sqrt(a));
        if (miles){return d * 0.621371;} //return miles
        else{return d;} //return km
      }

      toggleClinic(lat) {
        var node = ReactDOM.findDOMNode(this.refs[lat]);

        console.log('NODE ', node);
        //node.querySelector('.details').classList.toggle('show');
        
    }

}

export default ClinicNearYouMini;
