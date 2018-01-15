import React from 'react';
import { NavLink } from 'react-router-dom';

if (process.env.BROWSER) {
    require("./OnScreenNav__Item.scss");
}

class OnScreenNav__Item extends React.Component {
    render() {

        return (
                <li className={`nav-item ${this.props.additionalClass}`}>
                    <NavLink className="nav-item-title" to={`${this.props.path}`}>
                        {this.props.title}  <span className="sub-text">{this.props.subtitle}</span>
                    </NavLink>

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
    subtitle: '',
    path: "#",
    additionalClass: ''
}

export default OnScreenNav__Item;
