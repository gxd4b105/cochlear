import React from 'react';
// import Breadcrumbs from 'react-breadcrumbs';

class BreadCrumbs extends React.Component {
    render() {

        return (
            <div className="breadcrumbs">
                    <a href="/demo/templates/modules/index.html" className="back-to-parent">Back to Home</a>
                    <ul itemprop="breadcrumb">
                        <li className="home">
                            <a href="/" rel="home">Home</a>
                        </li>
                        <li>
                            <a href="/demo/templates/index.html">Hearing Loss</a>
                        </li>
                        <li>
                            <a href="/demo/templates/modules/index.html">Untreated hearing Loss for children</a>
                        </li>
                        <li className="is-active">
                            CM02 Content Tile
                        </li>
                    </ul>
            </div>
        );
    }
}

export default BreadCrumbs;
