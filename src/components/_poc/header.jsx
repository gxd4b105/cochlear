import React from 'react';
// import Breadcrumbs from 'react-breadcrumbs';

class Header1 extends React.Component {
    render() {

        return (
            <div className="breadcrumbs">
                <div className="l-padding">
This is the header!!! cool huh?

{this.props['header-banner-image']['src']}

CC
                </div>
            </div>
        );
    }
}

export default Header1;
