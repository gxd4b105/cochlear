import React, { Component } from 'react';

class Cm29GoogleSearch extends Component {

    constructor(props) {
        super(props);
        this.state={
            query: ''
        }
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(event){
        let value = event.target.value;
        this.setState({query: value});
    }

    render() {

        // let autocompleteProps = {
        //     id: 'site-search',
        //     label: {
        //         text: 'Search',
        //         hide: true
        //     },
        //     type: 'search',
        //     autocomplete: {
        //         url: '../../data/search.json',
        //         type: 'links'

        //     }
        // };

        return (
            <div className="global-search" role="search" id="global-search">
                <div className="l-padding">
                    <form >
                        {
                            //<Ctrl_holder propsObj={autocompleteProps} />
                        }
                        <div className="ctrl-holder">
                            <label className="vh" htmlFor="q">Search</label>
                            <p className="vh">Type a minimum of three characters then press UP or DOWN on the keyboard to navigate the autocompleted search results</p>
                            <div className="js-autocomplete text autocomplete has-button" data-autocomplete-url={''} data-autocomplete-type="links">
                                <div className="search-input-wrapper">
                                    <span className="js-search-underline input-border-highlight"></span>

                                    <input value={this.state.query} name="q" id="q" onChange={this.handleChange} className="text js-autocomplete-input js-search-input width-full" type="search" autoComplete="off" aria-controls="q-autocomplete-results" role="combobox" />
                                    
                                    <button className="link-icon search-submit" type="submit" role="button" aria-label="Search button" data-dpmaxz-eid="2">
                                        <span className="vh">Search button</span>
                                        <span className="icon svg-search-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M18.5 2C13.3 2 9 6.3 9 11.5c0 2.3.8 4.3 2.1 6l-8.8 8.8 1.4 1.4 8.8-8.8c1.6 1.3 3.7 2.1 6 2.1 5.2 0 9.5-4.3 9.5-9.5S23.7 2 18.5 2zm0 17c-4.1 0-7.5-3.4-7.5-7.5S14.4 4 18.5 4 26 7.4 26 11.5 22.6 19 18.5 19z" fill="#ffffff"></path></svg></span>
                                    </button>
                                </div>
                                <div id="q-autocomplete-results" className="autocomplete-results" tabIndex="-1">
                                    <div className="autocomplete-list"></div>
                                    <div className="autocomplete-results-footer">
                                        <button className="js-autocomplete-results-submit autocomplete-results-item" data-dpmaxz-eid="3">Search for ‘<span className="js-autocomplete-results-searchterm">&nbsp;</span>’</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form >
                </div >
            </div >




        );

    }

}

export default Cm29GoogleSearch;