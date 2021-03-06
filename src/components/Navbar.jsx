import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    static fetchData() {
    }
    render() {
        return (
            <nav className={`nav-onscreen js-onscreen nav-onscreen__global-header`}>
                <ul className="nav cf">
                    <li className={`nav-item`}>
                        <NavLink className="nav-item-title" to="/intl/firstpage">
                            Home <span className="sub-text">This links to the homepage</span>
                        </NavLink>
                    </li>
                    <li className={`nav-item`}>
                        <NavLink className="nav-item-title" to="/intl/secondpage">
                            Second Page <span className="sub-text">This links to the second page</span>
                        </NavLink>
                    </li>
                    <li className={`nav-item`}>
                        <NavLink className="nav-item-title" to="/usa/thirdpage">
                            Third Page <span className="sub-text">This links to the third page</span>
                        </NavLink>
                    </li>
                </ul>
                {/* <% if vars[:hasLogin] == true %> */}
                <a href="#" className="icon-button login">Login</a>
                {/* <% end %> */}
            </nav>

        );
    }
}
export default Navbar;