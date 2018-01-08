import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar.jsx';
import * as actions from '../shared/app/redux/actions/user-actions'

class Header extends Component {
    static fetchData({ store, params }) {
        if (store.getState().user.headerCountry != params.country || store.getState().user.headerCountry === null){
            store.dispatch(actions.setHeaderCountry(params));
            return store.dispatch(actions.getHeader());
        }
        
        return ;
    }
    componentDidMount() {
        console.log('III ',this.props.countryUpdate);
        if (this.props.countryUpdate === 'true') {
            this.props.setHeaderCountry({'country': this.props.countryParams});
            this.props.getHeader();
        }
    }
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>The title</title>
                </Helmet>

                <header className={`global-header ${this.props.additionalClass}`}>
                    <div className="l-padding">
                        <div className="logo">
                            <a href={this.props.logoURL}><img src={this.props.logoPath} alt={this.props.title} /></a>
                        </div>
                        <h1>{this.props.headerTitle}</h1>
                        <Navbar />
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