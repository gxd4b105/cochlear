import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import * as actions from '../../shared/app/redux/actions/actions'

import GlobalHeader from './../GlobalHeader/GlobalHeader.jsx';
import GlobalFooter from './../GlobalFooter/GlobalFooter.jsx';
import Cm02ContentTile from "../../components/Cm02ContentTile/Cm02ContentTile.jsx";
import Cm01RichText from "../../components/Cm01RichText/Cm01RichText.jsx";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs.jsx";
import HeaderLandingBanner from "../../components/HeaderLandingBanner/HeaderLandingBanner.jsx";
import RelatedContent from "../../components/RelatedContent/RelatedContent.jsx";

if (typeof window === 'undefined') {
    global.window = {}
}

class BahaBoneConductionSystem extends Component {
    static fetchData({ store, params }) {
        return store.dispatch(actions.getBahaBoneConductionSystem());
    }

    componentDidMount() {
    }


    render() {

//        console.log(this.props.dataProductsAndSolutions);
        let getData = this.props.dataBahaBoneConductionSystem;
        let json = {
            "breadcrumbs": [{ title: "Home", link:'/intl/home' },
                            { title: "Products & Solutions", link: '/intl/products-and-solutions' },
                            { title: "Baha bone conduction system", link: '/intl/baha-bone-conduction-system'}
            ]
        };
        return (
            <div className="l-layout l-one-column cf">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{getData['title']}</title>
                    <meta name="title" content={getData['title']} />
                    <meta name="description" content={getData['description']} />
                    <meta name="keywords" content="Hearing aids for children,Sensorineural hearing loss in children,Conductive hearing loss in children,Single sided deafness in children,hearing aids,unilateral hearing loss in children,hearing loss in one ear" />
                    <link rel="canonical" href="http://www.cochlear.com/wps/wcm/connect/intl/home/understand/my-child-has-hl" />
                </Helmet>

                <GlobalHeader title={this.props.headerTitle} country={this.props.headerCountry} countryParams={this.props.match.params.country} countryUpdate = 'false' />

                <HeaderLandingBanner title={getData['title']}
                                     description={getData['description']}
                                     image={'https://auth.cochlear.com/'+getData['banner-image'].src}
                                     imagePath={getData['banner-image'].alt}
                                     additionalClass=""/>
                <BreadCrumbs jsonData={json}/>

                <div className='l-content-container cf l-padding'>

                    <main id="main" tabIndex="-1" role="main" className="l-main">

                        <article className="l-content-column">
                            <Cm01RichText body={getData['body-copy']}/>
                        </article>

                    </main>
                </div>

                <GlobalFooter title={this.props.footerTitle} country={this.props.footerCountry} countryParams={this.props.match.params.country} countryUpdate = 'false' />
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
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(BahaBoneConductionSystem);
