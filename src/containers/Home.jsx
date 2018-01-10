import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import Header from './GlobalHeader/GlobalHeader.jsx';
import Footer from './GlobalFooter/GlobalFooter.jsx';
import Body from '../components/Body.jsx';
import * as actions from '../shared/app/redux/actions/user-actions'

class Home extends Component {
    static fetchData({ store, params }) {
        return store.dispatch(actions.getHome());
    }

    componentDidMount() {
    }

    render() {
        if(this.props.match.params.country === this.props.headerCountry){
            return (
                <div>
                    <Header title={this.props.headerTitle} country={this.props.headerCountry} countryParams={this.props.match.params.country} countryUpdate = 'false' />
                    <Body />
                    <Footer title={this.props.footerTitle} country={this.props.footerCountry} countryParams={this.props.match.params.country} countryUpdate = 'false' />
                </div>
            );
        } else {
            return (
                <div>
                    <Header title={this.props.headerTitle} country={this.props.headerCountry} countryParams={this.props.match.params.country} countryUpdate = 'true' />
                    <Body />
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
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Home);
