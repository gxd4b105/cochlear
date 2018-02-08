import React from 'react';

class HeaderBanner extends React.Component {
    render() {

        return (
            <div className="breadcrumbs">
                <div className="l-padding">

                <p> THIS IS THE START OF HeaderBanner COMPONENT</p>





<h1>{this.props['header-banner-title']}</h1>
<p>{this.props['header-banner-image']['src']}</p>

<p>
(change the link to see how it works with another API) 
<a href="/intl/en-gb/test-components">Link to another page (even though its the same page currently)</a>

</p>


<p> THIS IS THE END OF HeaderBanner COMPONENT</p>

                </div>
            </div>
        );
    }
}

export default HeaderBanner;
