import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './Navbar.jsx';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import * as actions from '../shared/app/redux/actions/user-actions'

class Body extends Component {
    static fetchData() {
        console.log('test-header');
    }
    componentDidMount() {
        console.log('YES!!!!');
        this.props.getHomesecond();
    }
    render() {
        return (
            <div>
                <hr />
                This is the Body 

                title: {this.props.bodyTitle} 
                <Navbar />
                <hr />
            </div>
        );
    }
}
function mapStateToProps(state) {
    console.log('MMMMMMMMMMM ', state);
    return {
        ...state.user,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Body);