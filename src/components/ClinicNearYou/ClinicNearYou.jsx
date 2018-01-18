import React from 'react';
import GoogleMapsWrapper from './GoogleMapsWrapper.jsx';
import { Marker } from 'react-google-maps';
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";
import Geosuggest from 'react-geosuggest';


class ClinicNearYou extends React.Component {

    

	componentWillMount() {
        this.setState({ markers: [], lat: -32, lng: 151, label: '' });

	}

    componentDidMount() {
		// const url = [
		// 	// Length issue
		// 	`https://gist.githubusercontent.com`,
		// 	`/farrrr/dfda7dd7fccfec5474d3`,
		// 	`/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
        // ].join("")


        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({ lat: position.coords.latitude, lng: position.coords.longitude});

            });
        }
        
        const url = 'https://api.myjson.com/bins/193iwd';
		
		fetch(url)
		.then(res => res.json())
		.then(data => {
			this.setState({ markers: data });
		});
	}


    render() {

        return (

    <section className={`cm cm-subscription-banner ${this.props.additionalClass}`}>
        <div className="l-padding">
            <form className="fn_validate" action="/intl/clinic-finder">
                <div className="fn_validate_summary"></div>
                <fieldset>
                    <div className="title-text-container">
                        <legend>{this.props.title}</legend>
                        <p>{this.props.description}</p>
                    </div>
                    <div className="input-container">
                        <div className="ctrl-holder width-l">
                            <label htmlFor="txt-postcode">Postcode<em>*<span className="vh">Required field</span></em></label>
                            <div className="ctrl">
                                <input name="txt-postcode" id="txt-postcode" className="text" data-rule-required="true" />
                                    <div className="status-msg">
                                    </div>
                            </div>
                        </div>
                        <div className="btn-holder">
                            <button role="button" type="submit" className="fn_validate_submit cta">Search</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>





        <div>The closest clinics to <strong>{this.state.label.length >0 ? this.state.label : 'you'}</strong>:</div>
<ul>
        {this.state.markers.map((marker) => {

          let markerDistance = this.getDistance(this.state.lat,this.state.lng,marker.lat,marker.lng);  


    if(markerDistance < 1000){
 


   return <li key={marker.lat}><strong>{marker.text}</strong><br />{marker.address} &nbsp; <span style={{'fontSize':'12px'}}>{parseInt(markerDistance)}km</span></li>
}

})}
</ul>


        <GoogleMapsWrapper
				googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD49FWPcw5h8bj6-LnHNaCkbqhFm7hULFI"
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `400px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
				defaultZoom={12}
				defaultCenter={{ lat: -33.0391667, lng: 131.525 }}
                center={{lat: this.state.lat, lng: this.state.lng}}
                >


<Geosuggest 
                onSuggestSelect={this.onSuggestSelect.bind(this)}
                />

                
                
				<MarkerClusterer
					averageCenter
					enableRetinaIcons
					gridSize={60}
					>
					{this.state.markers.map(marker => (
						<Marker
							key={marker.text}
							position={{ lat: parseInt(marker.lat), lng: parseInt(marker.lng) }}
							/>
					))}
				</MarkerClusterer>
                
			</GoogleMapsWrapper>








    </section>


        );
    }


    onSuggestSelect(suggest) {
        console.log(suggest);

        this.setState({ lat: suggest.location.lat, lng: suggest.location.lng, label:suggest.label });
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






}

export default ClinicNearYou;
