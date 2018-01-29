import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import * as actions from '../../shared/app/redux/actions/actions'
import GlobalHeader from './../GlobalHeader/GlobalHeader.jsx';
import GlobalFooter from './../GlobalFooter/GlobalFooter.jsx';
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs.jsx";
import ClinicNearYou from "../../components/ClinicNearYou/ClinicNearYou.jsx";
import ContentHeader from "../../components/ContentHeader/ContentHeader.jsx";
import Cm01RichText from "../../components/Cm01RichText/Cm01RichText.jsx";
import Header1 from "../../components/_poc/header.jsx";
import axios from 'axios';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state =   {
                        finalData:''
                        };
                    }

    componentDidMount() {
        console.log('test');
        axios.get(`https://auth.cochlear.com/contentservice/api/content/deloitte/home/test-components`)
        .then(res => {
            this.setState({finalData: res.data});
        });

        const Avatar = (props) => {
            return <p>{props}</p>;
          }
    }
    render() {
        let button = null;
        if (this.state.finalData) {
            let items = [];
            let items1 = 0;
            let indexx=0;

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
                    if(items1 === 1){
                        items[0][key] = this.state.finalData[key];
                    }
                }
            }

            items.map((item) => {
                if(item.dataKey === 'component-header-banner'){
                    button = <Header1 {...item} />;
                }
            })
    }

        return (
            <div className="l-layout l-two-column cf">
                {this.state.finalData.container}
                {button}
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
