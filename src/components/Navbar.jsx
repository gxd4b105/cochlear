import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    static fetchData() {
    }
    render() {
        return (
            <nav className={`nav-onscreen js-onscreen nav-onscreen__global-header`}>
                <ul className="nav cf">
                    <li className={`nav-item`}>
                        <Link prefetch className="nav-item-title" to="/">
                            Home <span className="sub-text">This links to the homepage</span>
                        </Link>
                    </li>
                    <li className={`nav-item`}>
                        <Link prefetch className="nav-item-title" to="/secondpage">
                            Second Page <span className="sub-text">This links to the second page</span>
                        </Link>
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