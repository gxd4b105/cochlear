import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Body from '../components/Body.jsx';
import * as actions from '../shared/app/redux/actions/user-actions'

class Home extends Component {
    static fetchData({ store, params }) {
        return store.dispatch(actions.getHome());
    }

    componentDidMount() {
        this.props.getHeader();
        this.props.getFooter();
    }

    render() {
        return (
            <div>
                <Body />
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
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Home);
