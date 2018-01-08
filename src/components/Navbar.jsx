import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    static fetchData() {
    }
    render() {
        return (
            <div>
                <ul>
                    <li><Link to='/intl/firstpage'>Home Page</Link></li>
                    <li><Link to='/intl/secondpage'>Second Page</Link></li>
                </ul>
            </div>
        );
    }
}
export default Navbar;