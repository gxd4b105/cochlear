import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import * as actions from '../../shared/app/redux/actions/user-actions';

import GlobalFooter__Nav from '../../components/GlobalFooter__Nav/GlobalFooter__Nav.js';
import GlobalFooter__Nav__Item from '../../components/GlobalFooter__Nav__Item/GlobalFooter__Nav__Item.js';
import GlobalFooter__Nav__Social from '../../components/GlobalFooter__Nav__Social/GlobalFooter__Nav__Social.js';
import GlobalFooter__Nav__Social__Item from '../../components/GlobalFooter__Nav__Social__Item/GlobalFooter__Nav__Social__Item.js';

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
        if (this.props.countryUpdate === 'true' || this.props.countryUpdate === true) {
            console.log('it is true ', this.props.countryParams);
            this.props.setHeaderCountry({'country': this.props.countryParams});
            if(this.props.countryParams === 'intl'){
                console.log('getting intl');
                this.props.getFooter();
            } else {
                this.props.getFooterUS();
            }  
        }
    }
    render() {

        const children = this.props.children;

        let today = new Date(), Year = today.getFullYear();

        return (
            <footer className="global-footer" role="contentinfo">
                <div className="l-padding">
                    <h2>title: {this.props.footerTitle} </h2>

                    <nav>
                        {/* Add class in has-XX-items */}
                        <ul className={`nav-footer has-5-items`}>

                            <GlobalFooter__Nav>
                                <GlobalFooter__Nav__Item/>
                                <GlobalFooter__Nav__Item/>
                                <GlobalFooter__Nav__Item/>
                                <GlobalFooter__Nav__Item/>
                            </GlobalFooter__Nav>
                            <GlobalFooter__Nav>
                                <GlobalFooter__Nav__Item/>
                                <GlobalFooter__Nav__Item/>
                                <GlobalFooter__Nav__Item/>
                                <GlobalFooter__Nav__Item/>
                            </GlobalFooter__Nav>
                            <GlobalFooter__Nav>
                                <GlobalFooter__Nav__Item/>
                                <GlobalFooter__Nav__Item/>
                                <GlobalFooter__Nav__Item/>
                                <GlobalFooter__Nav__Item/>
                            </GlobalFooter__Nav>
                            <GlobalFooter__Nav>
                                <GlobalFooter__Nav__Item/>
                                <GlobalFooter__Nav__Item/>
                                <GlobalFooter__Nav__Item/>
                                <GlobalFooter__Nav__Item/>
                            </GlobalFooter__Nav>
                            <GlobalFooter__Nav__Social>
                                <GlobalFooter__Nav__Social__Item/>
                                <GlobalFooter__Nav__Social__Item/>
                                <GlobalFooter__Nav__Social__Item/>
                                <GlobalFooter__Nav__Social__Item/>
                            </GlobalFooter__Nav__Social>

                            {/* <% if vars[:isMinimal] == false %> */}
                            {/* <% data.nav.footer.each_with_index do |lvl1, i| %> */}
                            {/*
                            {React.Children.map(children, (child) => {
                                return  child
                            })}
                            */}

                            {/* <% end %>
                            <% end %> */}

                        </ul>
                    </nav>

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