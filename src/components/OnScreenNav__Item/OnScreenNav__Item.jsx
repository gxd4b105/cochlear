import React from 'react';
import { Link } from 'react-router-dom';

class OnScreenNav__Item extends React.Component {
    render() {

        return (
                <li className={`nav-item ${this.props.additionalClass}`}>
                    <a className="nav-item-title" href={`${this.props.path}`}>
                        {this.props.title}
                    </a>

                    {/* <% if !lvl1.pages.nil? %>
                    <div className="dropdown">
                        <div className="l-padding">

                            <ul data-heights-type="nav-onscreen">
                                <% lvl1.pages.each_with_index do |lvl2, i| %>
                                <%= partial("partials/global/nav/nav-item", :locals => {
                                    :id => 'nav-onscreen-' + i.to_s,
                                    :level => 2,
                                    :path => lvl2.path,
                                    :title => lvl2.title,
                                    :pages => lvl2.pages,
                                    :alwaysShowCaret => true,
                                    :depth => 1
                                }) %>
                                <% end %>
                            </ul>

                        </div>
                    </div>
                    <% end %>
                    */}
                </li>
        );
    }
}
OnScreenNav__Item.defaultProps = {
    title: "On Screen Nav",
    path: "#",
    additionalClass: ''
}

export default OnScreenNav__Item;
