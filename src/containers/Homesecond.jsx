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
        console.log('mounted ', this.props.match.params.country);
        this.props.getHeader();
        this.props.getFooter();
    }

    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Homesecond</title>
                </Helmet>
                <Bodysecond />

                AND the route params is: {this.props.match.params.country}

            </div>
        );
    }
}
function mapStateToProps(state) {
    console.log('TEST TEST TEST ', state);

    return {
        ...state.home,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Homesecond);
