import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import GlobalHeader from './../GlobalHeader/GlobalHeader.jsx';
import GlobalFooter from './../GlobalFooter/GlobalFooter.jsx';
import Bodythird from '../../components/Bodythird.jsx';
import * as actions from '../../shared/app/redux/actions/user-actions'

class Homethird extends Component {
    static fetchData({ store, params }) {
        return store.dispatch(actions.getHomethird());
    }

    componentDidMount() {
    }

    render() {
        if(this.props.match.params.country === this.props.headerCountry){
            return (
                <div>
                    <GlobalHeader title={this.props.headerTitle} country={this.props.headerCountry} countryParams={this.props.match.params.country} countryUpdate = 'false' />
                    <Bodythird />
                    <GlobalFooter title={this.props.footerTitle} country={this.props.footerCountry} countryParams={this.props.match.params.country} countryUpdate = 'false' />
                </div>
            );
        } else {
            return (
                <div>
                    <GlobalHeader title={this.props.headerTitle} country={this.props.headerCountry} countryParams={this.props.match.params.country} countryUpdate = 'true' />
                    <Bodythird />
                    <GlobalFooter title={this.props.footerTitle} country={this.props.footerCountry} countryParams={this.props.match.params.country} countryUpdate = 'true' />
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
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Homethird);
