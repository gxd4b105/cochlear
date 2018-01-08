import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import * as actions from '../shared/app/redux/actions/user-actions'

class Header extends Component {
    static fetchData({ store, params }) {
        console.log('STORE STATES ', store.getState().user.headerCountry);
        console.log('PARAMS ', params); 
        console.log('Mounted ', params.country);
        console.log('CHECKING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        if (store.getState().user.headerCountry != params.country){
            console.log('NO ', params.country);
            console.log('ACtisoNS ', actions);

            store.dispatch(actions.setHeaderCountry(params));
            return store.dispatch(actions.getHeader());
        } else {
            console.log('YES!');
            return;
        }
    }
    componentDidMount() {
        if(this.props.match){
            console.log('mounted ', this.props.match.params.country);
        }
        console.log('rwwwww');
        console.log(this.props);
        //console.log(store);

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
                
                
                <p>So Esteban is ... {this.props.esteban}</p>



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