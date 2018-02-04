import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import * as actions from '../../shared/app/redux/actions/actions';

import OnScreeNav from '../../components/OnScreenNav/OnScreeNav.jsx';
import OnScreenNav__Item from '../../components/OnScreenNav__Item/OnScreenNav__Item.jsx';
import GlobalHeader__Nav from '../../components/GlobalHeader__Nav/GlobalHeader__Nav.jsx';
import GlobalHeader__Nav__Item from '../../components/GlobalHeader__Nav__Item/GlobalHeader__Nav__Item.jsx';
import RegionLanguageSelect from "../../components/RegionLanguageSelect/RegionLanguageSelect.jsx";

//import imageSrc from '../../../images/logo2.png';

if (process.env.BROWSER) {
    require("../../styles/framework.css");
    //require("../../styles/fonts.scss");
    //require("../../styles/mixins.scss");
    require("../../styles/global.scss");
    //require("./GlobalHeader.scss");
}
class Header extends Component {
    static fetchData({ store, params }) {
        if (store.getState().user.headerCountry != params.country || store.getState().user.headerCountry === null){
            store.dispatch(actions.setHeaderCountry(params));
            if(params.country === 'intl') {
                return store.dispatch(actions.getHeader());
            }
            return store.dispatch(actions.getHeaderUS());
        }
        
        return ;
    }
    componentDidMount() {
        if (this.props.countryUpdate === 'true' || this.props.countryUpdate === true) {
            this.props.setHeaderCountry({'country': this.props.countryParams});
            if(this.props.countryParams === 'intl'){
                console.log('getting intl');
                this.props.getHeader();
            } else {
                this.props.getHeaderUS();
            }  
        }
    }
    render() {
        return (
            <div>

                <header className={`global-header ${this.props.additionalClass}`}>
                        <div className="l-padding">

                        

                            <button className="nav-toggle js-offscreen-toggle" type="button" role="button" aria-label="Toggle navigation" data-offscreen-id="nav">
                                <span className="lines"></span>
                                <span className="vh">Toggle navigation</span>
                            </button>

                            <a href="#" className="icon-button login">Login</a>

                            <button className="link-icon search-toggle js-popover-toggle" type="button" role="button" aria-label="Toggle search" data-popover-id="global-search">
                                <span className="icon svg-search-black" data-grunticon-embed></span>
                                <span className="icon svg-close-grey" data-grunticon-embed></span>
                                <span className="vh">Toggle search</span>
                            </button>

                            <RegionLanguageSelect cta="Select a region and language"
                                                  formAction="/intl/home"
                                                  submitText="Change"/>

                            <div className="logo">
                                <a href={this.props.logoURL}><img src={this.props.logoPath} alt={this.props.title} /></a>
                            </div>

                            <GlobalHeader__Nav additionalClass="nav-global__global-header">
                                <GlobalHeader__Nav__Item title="Contact Us"
                                                   path="/intl/contact-us"/>
                                <GlobalHeader__Nav__Item title="Find a clinic"
                                                   path="/intl/find-a-clinic"/>
                                <GlobalHeader__Nav__Item title="Careers"
                                                   path="/intl/careers"/>
                                <GlobalHeader__Nav__Item title="About Us"
                                                   path="/intl/about-us"/>
                            </GlobalHeader__Nav>

                        </div>

                        <OnScreeNav additionalClass="nav-onscreen__main-header">
                            <OnScreenNav__Item title="Hearing Loss"
                                               path="/intl/hearing-loss"/>
                            <OnScreenNav__Item title="Treating hearing loss"
                                               path="/intl/treating-hearing-loss"/>
                            <OnScreenNav__Item title="Life with a hearing implant"
                                               path="/intl/life-with-a-hearing-implant"/>
                            <OnScreenNav__Item title="Products & Solutions"
                                               path="/intl/products-and-solutions"/>
                            <OnScreenNav__Item title="Community & resources"
                                               path="/intl/community-and-resources"/>
                        </OnScreeNav>

                </header>
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

Header.defaultProps = {
    title: "",
    logoURL: "/intl/home",
    logoPath:"http://www.cochlear.com/wps/wcm/connect/f3088c94-a515-45e6-b59f-a6f79299d16b/logo.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-f3088c94-a515-45e6-b59f-a6f79299d16b-kSekuTE",
    additionalClass: "is-dark"
}


export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Header);