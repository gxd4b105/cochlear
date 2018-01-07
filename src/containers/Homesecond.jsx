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
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        ...state.home,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Homesecond);
