import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import * as actions from '../shared/app/redux/actions/user-actions'

class Footer extends Component {
    static fetchData({store}) {
        //console.log('okey dokey ', store.getState());
        return store.dispatch(actions.getFooter());
    }
    componentDidMount() {
        this.props.getFooter();
    }
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>The title</title>
                </Helmet>
                <strong>FOOTER</strong>
    
                    title: {this.props.footerTitle} 
  
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
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Footer);