import React from 'react';

class GlobalSearch extends React.Component {
    render() {

        return (

            <div className="global-search" role="search" id="global-search">
                {/* <% if vars[:isMinimal] == false %> */}
                <div className="l-padding">
                    <form>
                        {/*
                        <%= partial("partials/forms/special/autocomplete", :locals => {
                        :id => "site-search",
                        :label => {
                            :text => "Search",
                            :hide => true
                        },
                        :type => "search",
                        :autocomplete => {
                            :url => "/assets/json/autocomplete-links.json",
                            :type => 'links',
                            :button => ""
                        }
                        }) %>

                         */}
                        <button className="link-icon search-submit" type="submit" role="button" aria-label="Search button">
                            <span className="vh">Search button</span>
                            <span className="icon svg-search-white" data-grunticon-embed></span>
                        </button>
                    </form>

                </div>
                {/* <% end %> */}
            </div>

        );
    }
}

export default GlobalSearch;
