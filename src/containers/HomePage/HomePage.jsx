import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import * as actions from '../../shared/app/redux/actions/actions'

import GlobalHeader from './../GlobalHeader/GlobalHeader.jsx';
import GlobalFooter from './../GlobalFooter/GlobalFooter.jsx';
import Cm02ContentTile from "../../components/Cm02ContentTile/Cm02ContentTile.jsx";

class HomePage extends Component {
    static fetchData({ store, params }) {
        return store.dispatch(actions.getHome());
    }

    componentDidMount() {
    }

    render() {

        console.log(this.props.dataHome);
        let getData = this.props.dataHome;

        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Home Page</title>
                </Helmet>
                <GlobalHeader title={this.props.headerTitle} country={this.props.headerCountry} countryParams={this.props.match.params.country} countryUpdate = 'false' />
                <div className='l-content-container cf l-padding'>

                    <div className="sl">
                        <div className="sl-list has-2-items">
                            <div className="sl-item">
                                <Cm02ContentTile    title={getData['cm02-title-02-01'].title}
                                                    description={getData['cm02-description-02-01']}
                                                    path={getData['cm02-title-02-01'].path}
                                                    image={'https://auth.cochlear.com'+getData['cm02-image-02-01'].src}
                                                    imagePath={getData['cm02-title-02-01'].path}
                                                    embed = {getData['cm02-video-embed-02-01']}
                                                    additionalClass="is-small"/>
                            </div>
                            <div className="sl-item">
                                <Cm02ContentTile    title={getData['cm02-title-02-02'].title}
                                                    description={getData['cm02-description-02-02']}
                                                    path={getData['cm02-title-02-02'].path}
                                                    image={'https://auth.cochlear.com'+getData['cm02-image-02-02'].src}
                                                    imagePath={getData['cm02-title-02-02'].path}
                                                    embed = {getData['cm02-video-embed-02-02']}
                                                    additionalClass="is-small"/>
                            </div>
                        </div>
                    </div>

                    <div className="sl">
                        <div className="sl-list has-2-items">
                            <div className="sl-item">
                                <Cm02ContentTile    title={getData['cm02-title-04-03'].title}
                                                    description={getData['cm02-description-04-03']}
                                                    path={getData['cm02-title-04-03'].path}
                                                    image={'https://auth.cochlear.com'+getData['cm02-image-04-03'].src}
                                                    imagePath={getData['cm02-title-04-03'].path}
                                                    embed = {getData['cm02-video-embed-04-03']}
                                                    additionalClass="is-small"/>
                            </div>
                            <div className="sl-item">
                                <Cm02ContentTile    title={getData['cm02-title-04-04'].title}
                                                    description={getData['cm02-description-04-04']}
                                                    path={getData['cm02-title-04-04'].path}
                                                    image={'https://auth.cochlear.com'+getData['cm02-image-04-04'].src}
                                                    imagePath={getData['cm02-title-04-04'].path}
                                                    embed = {getData['cm02-video-embed-04-04']}
                                                    additionalClass="is-small"/>
                            </div>
                        </div>
                    </div>

                    <div className="sl">
                        <div className="sl-list has-2-items">
                            <div className="sl-item">
                                <Cm02ContentTile    title={getData['cm02-title-05-05'].title}
                                                    description={getData['cm02-description-05-05']}
                                                    path={getData['cm02-title-05-05'].path}
                                                    image={'https://auth.cochlear.com'+getData['cm02-image-05-05'].src}
                                                    imagePath={getData['cm02-title-05-05'].path}
                                                    embed = {getData['cm02-video-embed-05-05']}
                                                    additionalClass="is-small"/>
                            </div>

                        </div>
                    </div>

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
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(HomePage);
