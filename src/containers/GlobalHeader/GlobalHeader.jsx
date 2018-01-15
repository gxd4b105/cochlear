import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import * as actions from '../../shared/app/redux/actions/actions';

import OnScreeNav from '../../components/OnScreenNav/OnScreeNav.jsx';
import OnScreenNav__Item from '../../components/OnScreenNav__Item/OnScreenNav__Item.jsx';

if (process.env.BROWSER) {
    require("./GlobalHeader.scss");
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
                        <div className="logo">
                            <a href={this.props.logoURL}><img src={this.props.logoPath} alt={this.props.title} /></a>
                        </div>
                        <h1>{this.props.headerTitle}</h1>

                        <OnScreeNav additionalClass="nav-onscreen__global-header">
                            <OnScreenNav__Item title="Home Intl"
                                               subtitle="This links to the first page"
                                               path="/intl/home"/>

                            <OnScreenNav__Item title="Second Intl"
                                               subtitle="This links to the second page"
                                               path="/intl/secondpage"/>

                            <OnScreenNav__Item title="Third USA"
                                               subtitle="This links to the third page"
                                               path="/usa/thirdpage"/>
                        </OnScreeNav>


                    </div>
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
    title: "FED Framework 4.2",
    logoURL: "#",
    logoPath:"http://www.cochlear.com/wps/wcm/connect/f3088c94-a515-45e6-b59f-a6f79299d16b/logo.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-f3088c94-a515-45e6-b59f-a6f79299d16b-kSekuTE",
    additionalClass: "is-dark"
}


export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Header);