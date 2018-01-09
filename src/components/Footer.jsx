import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import * as actions from '../shared/app/redux/actions/user-actions'

class Footer extends Component {
    static fetchData({store, params}) {
        if (store.getState().user.footerCountry != params.country || store.getState().user.footerCountry === null){
            store.dispatch(actions.setHeaderCountry(params));
            if (params.country === 'intl') {
                return store.dispatch(actions.getFooter());
            }
            return store.dispatch(actions.getFooterUS());
        }
        return ;
    }
    componentDidMount() {
        if (this.props.countryUpdate === 'true') {
            if (this.props.countryParams === 'intl') {
                this.props.getFooter();
            } else {
                this.props.getFooterUS();
            }
        }
    }
    render() {
        var today = new Date(), Year = today.getFullYear();

        return (
            <footer className="global-footer" role="contentinfo">
                <div className="l-padding">
                    <h2>title: {this.props.footerTitle} </h2>
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