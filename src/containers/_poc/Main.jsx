import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import * as actions from '../../shared/app/redux/actions/actions'
import GlobalHeader from './../GlobalHeader/GlobalHeader.jsx';
import GlobalFooter from './../GlobalFooter/GlobalFooter.jsx';
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs.jsx";
import ClinicNearYou from "../../components/ClinicNearYou/ClinicNearYou.jsx";
import Cm01RichText from "../../components/Cm01RichText/Cm01RichText.jsx";
import Header1 from "../../components/_poc/header.jsx";

import Dummy2 from "../../components/_poc/dummy2.jsx";
import axios from 'axios';



import HeaderBanner from "../../components/_poc/HeaderBanner.jsx";
import RichText from "../../components/_poc/RichText.jsx";



class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            finalData:''
        };
    }

    componentDidMount() {
    //     axios.get(`https://auth.cochlear.com/contentservice/api/content/deloitte/home/test-components`)
    //     .then(res => {
    //         console.log('WE MOIUNTEDv ', res.data);
    //         this.setState({finalData: res.data});
    //     });


this.setState({
finalData:  {
    "title": "Test Components",
    "description": "test page",
    "authoring template": "landing-page",
    "container": "landing-page",
    "component-header-banner": "component-header-banner",
    "header-banner-title": "",
    "header-banner-image": {
    "alt": "",
    "src": "/wps/wcm/connect/f0333d8b-3a3f-4aee-a9c1-656cbe3ba016/CHILD_SWITCH-ON_1_RGB.jpg?MOD=AJPERES&amp;CVID="
    },
    "header-banner-description": "",
    "component-content-header": "component-content-header",
    "content-header-title": "Test Components",
    "content-header-strapline": "In pursuing our promise to help people Hear now. And always, Cochlear may collect, use and share personal information. This may be through use of our websites, apps, products or services, or via communications with us. We want you to understand what personal information we collect, how we use it, with whom we share it, how we endeavour to protect it, how you can access and/or correct it, and, finally, how to contact us if you have any questions or concerns. ",
    "component-cm01-richtext-01": "cm01-richtext-01",
    "cm01-richtext-01": "<p dir=\"ltr\"><span style=\"color: rgb(30, 30, 30); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px;\">In pursuing our promise to help people&nbsp;</span><em style=\"box-sizing: border-box; color: rgb(30, 30, 30); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px;\"><span style=\"box-sizing: border-box; font-weight: 700;\">Hear now. And always</span></em><span style=\"color: rgb(30, 30, 30); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px;\">, Cochlear may collect, use and share personal information. This may be through use of our websites, apps, products or services, or via communications with us. We want you to understand what personal information we collect, how we use it, with whom we share it, how we endeavour to protect it, how you can access and/or correct it, and, finally, how to contact us if you have any questions or concerns.&nbsp;</span></p>\n",
    "component-cm02-content-title-01": "cm02-content-tile",
    "cm02-description": "We want you to understand what personal information we collect, how we use it.",
    "cm02-title": {
    "title": "Types of Treatment",
    "path": "/intl/types-of-treatment"
    },
    "cm02-image": {
    "alt": "",
    "src": "/wps/wcm/connect/02c5c7ce-160a-4475-82b5-7d8efeff9448/CLTD_INSPIRING_STORIES_USA_RAELYN_Still001.jpg?MOD=AJPERES&amp;CVID="
    },
    "component-cm01-richtext-02": "component-cm01-richtext-02",
    "cm01-richtext-02": "<p dir=\"ltr\"><span style=\"color: rgb(30, 30, 30); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px;\">This Privacy Policy applies to the websites, apps, communications, products and services provided by Cochlear Limited and its subsidiaries around the world (the “Cochlear Group”), a list of which can be found&nbsp;</span><a href=\"http://www.cochlear.com/intl/contact/global-offices?contentIDR=3ec9d3ca-2f7c-4dc0-9154-02142cae1fdb&amp;useDefaultText=0&amp;useDefaultDesc=0\" target=\"_blank\"  style=\"box-sizing: border-box; color: rgb(30, 30, 30); font-family: &amp;quot;Trebuchet MS&amp;quot;, Arial, sans-serif; font-size: 14px;\">here</a><span style=\"color: rgb(30, 30, 30); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px;\">.&nbsp;</span></p>\n",
    "component-cm02-content-tile-02": "component-cm02-content-tile-02",
    "cm02-image-01": {
    "alt": "",
    "src": "/wps/wcm/connect/4f0a924e-466b-4dec-a466-f26467401992/CLTD_INSPIRING_STORIES_CHINA_BOORAY_Still001.jpg?MOD=AJPERES&amp;CVID="
    },
    "cm02-title-01": {
    "title": "The title",
    "path": "/intl/untreated-hearing-loss-adult"
    },
    "cm02-description-01": "We want you to understand what personal information we collect, how we use it.",
    "cm02-image-02": {
    "alt": "",
    "src": "/wps/wcm/connect/d0e4b566-8dfa-4f9f-82ea-cd105da0f623/GettyImages-702558053.jpg?MOD=AJPERES&amp;CVID="
    },
    "cm02-title-02": {
    "title": "Test about",
    "path": "/intl/hearing-aids-vs-implantable-solutions"
    },
    "cm02-description-02": "We want you to understand what personal information we collect, how we use it."
    }   
})

    









        const Avatar = (props) => {
            return <p>{props}</p>;
          }
    }
    render() {
        let button = null,
            itemsx = [];

        if (this.state.finalData) {
            let items = [],
                items1 = 0,
                indexx=0;

            items[0]={};

            for (var key in this.state.finalData) {
                if (this.state.finalData.hasOwnProperty(key)) {
                    let query = 'component-';
                    if (key.substr(0, query.length).toUpperCase() === query.toUpperCase()) {
                        indexx=indexx+1;    
                        items[indexx]={};
                        items.push(key);
                        items1=1;
                        items[indexx]['dataKey'] = this.state.finalData[key];
                    } else {
                        items[indexx][key] = this.state.finalData[key];
                    }
                }
                else {
                    if (items1 === 1) {
                        items[0][key] = this.state.finalData[key];
                    }
                }
            }

            console.log('ITEMS ', items);

            items.map((item) => {
                if(item.dataKey === 'component-header-banner'){
                    itemsx.push(<HeaderBanner {...item} />);
                }
                // if(item.dataKey === 'component-content-header'){
                //     itemsx.push(<ContentHeader {...item} />);
                // }
                if(item.dataKey === 'component-cm01-richtext-02'){
                    itemsx.push(<RichText {...item} />);
                }
            })
        }

        return (
            <div className="l-layout l-two-column cf">
            MAIN
                {this.state.finalData.container}
                {itemsx}
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
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Main);
