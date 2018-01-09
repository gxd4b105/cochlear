import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Bodysecond from '../components/Bodysecond.jsx';
import * as actions from '../shared/app/redux/actions/user-actions'

class Homesecond extends Component {
    static fetchData({ store, params }) {
        return store.dispatch(actions.getHomesecond());
    }

    componentDidMount() {
    }

    render() {
        if(this.props.match.params.country === this.props.headerCountry){
            return (
                <div>
                    <Header title={this.props.headerTitle} country={this.props.headerCountry} countryParams={this.props.match.params.country} countryUpdate = 'false' />
                    <Bodysecond />
                    <Footer title={this.props.footerTitle} country={this.props.footerCountry} countryParams={this.props.match.params.country} countryUpdate = 'false' />
                </div>
            );
        } else {
            return (
                <div>
                    <Header title={this.props.headerTitle} country={this.props.headerCountry} countryParams={this.props.match.params.country} countryUpdate = 'true' />
                    <Bodysecond />
                    <Footer title={this.props.footerTitle} country={this.props.footerCountry} countryParams={this.props.match.params.country} countryUpdate = 'true' />
                </div>
            );
        }
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
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Homesecond);
