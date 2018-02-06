import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../shared/app/redux/actions/actions';

import GlobalFooter__Nav from '../../components/GlobalFooter__Nav/GlobalFooter__Nav.jsx';
import GlobalFooter__Nav__Social from '../../components/GlobalFooter__Nav__Social/GlobalFooter__Nav__Social.jsx';


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
            this.props.setHeaderCountry({'country': this.props.countryParams});
            if(this.props.countryParams === 'intl'){
                this.props.getFooter();
            } else {
                this.props.getFooterUS();
            }  
        }
    }
    render() {

        const children = this.props.children;

        let today = new Date(), Year = today.getFullYear();
        let items = this.props.items || 5;

        let mockUpData=
        [{
            title: 'Connect',
            links: [
                {title: 'Careers', path: '#'},
                {title: 'Contact us', path: '#'},
                {title: 'About us', path: '#'}
            ]
        },
        {
            title: 'Links',
            links: [
                {title: 'Investor centre', path: '#'},
                {title: 'Sitemap', path: '#'}
            ]
        }
        ,{
            title: 'Blog',
            links: [
                {title: 'Hear and Now', path: '#'},
                {title: 'ProNews', path: '#'}
            ]
        }];

        let socialItems=[
            {
                path: '#',
                socialVerb: "Talk to",
                socialTitle: "Twitter",
                socialIcon: "twitter"
            },
            {
                path: '#',
                socialVerb: "Talk to",
                socialTitle: "Facebook",
                socialIcon: "facebook"
            },
            {
                path: '#',
                socialVerb: "Talk to",
                socialTitle: "Youtube",
                socialIcon: "youtube"
            },
            {
                path: '#',
                socialVerb: "Talk to",
                socialTitle: "Google Plus",
                socialIcon: "googleplus"
            }
        ];


        let arrayOfColumns = mockUpData || [ 1, 2, 3, 4 ];
        const columnsList = arrayOfColumns.map( (column, index) => {
            let classes='nav-footer-item ';
            if (index!=arrayOfColumns.length-1){
                classes+='columns2';
            }
            else {
                classes+='column';
            }
        return (<GlobalFooter__Nav propObj={column} classNames={classes} key={index}/>); 
        });

        return (
            <footer className="global-footer" role="contentinfo">
                <div className="l-padding">
                    <nav>
                        {/* Add class in has-XX-items */}
                        <ul className={`nav-footer has-5-items`}>
                            
                            <li className="brandImg"> 
                                <a href="/">Cochlear</a>
                            </li> 
                            
                            {columnsList}

                            <GlobalFooter__Nav__Social socialItemsObj={socialItems} />

                        </ul>
                    </nav>   
                </div>
                <div className='subfooter-container'>
                    <div className='subfooter-link'><a href=''>Privacy policy</a></div>
                    <div className='subfooter-link'><a href=''>Terms of use</a></div>
                    <div className='subfooter-link'><a href=''>Disclaimer</a></div>
                    <div className='subfooter-copyright'><p>Copyright &copy; {Year} Cochlear Ltd. All rights reserved</p></div>
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