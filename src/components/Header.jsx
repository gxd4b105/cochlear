import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import * as actions from '../shared/app/redux/actions/user-actions'

class Header extends Component {
    static fetchData({store}) {
        return store.dispatch(actions.getHeader());
    }
    componentDidMount() {
        this.props.getHeader();
    }
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>The title</title>
                </Helmet>
                <strong>HEADER</strong>
    
                    title: {this.props.headerTitle} 
  
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
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Header);