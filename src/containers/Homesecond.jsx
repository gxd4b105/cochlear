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
        console.log('mounteduuu ', this.props.match.params.country);
        console.log('mounteduuu2 ', this.props.headerCountry);

        let test = this.props.match.params.country !== this.props.headerCountry ? 'yes' : 'no';
        console.log('test is ',test);
        //this.props.getHeader();
        //this.props.getFooter();
        //{...condition ? {bsStyle: 'success'} : {}}
        this.test = test;
    }

    render() {
        if(this.props.match.params.country === this.props.headerCountry){
        return (
            <div>BLAH {this.props.match.params.country} and {this.props.headerCountry}
                <Header title={this.props.headerTitle} country={this.props.headerCountry} countryUpdate = 'false' />
                <Bodysecond />
                <Footer title={this.props.footerTitle} />
            </div>
        );
    } else {
        return (
            <div>BLAH {this.props.match.params.country} and {this.props.headerCountry}
                <Header title={this.props.headerTitle} country={this.props.headerCountry} countryParams={this.props.match.params.country} countryUpdate = 'true' />
                <Bodysecond />
                <Footer title={this.props.footerTitle} />
            </div>
        );
    }
    }
}
function mapStateToProps(state) {
    console.log('TEST TEST TEST ', state);

    return {
        ...state.user,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Homesecond);
