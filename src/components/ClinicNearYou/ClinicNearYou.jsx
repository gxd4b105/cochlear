import React from 'react';
import GoogleMapsWrapper from './GoogleMapsWrapper.jsx';
import { Marker } from 'react-google-maps';
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

class ClinicNearYou extends React.Component {

	componentWillMount() {
		this.setState({ markers: [] })
	}

    componentDidMount() {
		const url = [
			// Length issue
			`https://gist.githubusercontent.com`,
			`/farrrr/dfda7dd7fccfec5474d3`,
			`/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
		].join("")
		
		fetch(url)
		.then(res => res.json())
		.then(data => {
			this.setState({ markers: data.photos });
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




        <GoogleMapsWrapper
				googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD49FWPcw5h8bj6-LnHNaCkbqhFm7hULFI"
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `400px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
				defaultZoom={3}
				defaultCenter={{ lat: 25.0391667, lng: 121.525 }}>
				<MarkerClusterer
					averageCenter
					enableRetinaIcons
					gridSize={60}
					>
					{this.state.markers.map(marker => (
						<Marker
							key={marker.photo_id}
							position={{ lat: marker.latitude, lng: marker.longitude }}
							/>
					))}
				</MarkerClusterer>
			</GoogleMapsWrapper>








    </section>


        );
    }
}

export default ClinicNearYou;
