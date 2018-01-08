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

        var today = new Date(), Year = today.getFullYear();

        return (

            <footer className="global-footer" role="contentinfo">
                <div className="l-padding">
                    <h2>title: {this.props.title} </h2>
                    <p>&copy; {Year} Deloitte Digital Australia</p>
                </div>
            </footer>
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