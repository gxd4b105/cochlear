import React from 'react';

class Dummy1 extends React.Component {
    render() {

        return (
            <div className="breadcrumbs">
                <div className="l-padding">

                
<p>This is dummy 1 and some of the props we have access to and can do whatever we want with are: </p>

<p>{this.props['header-banner-image']['src']}</p>

<p>
(change the link to see how it works with another API) 
<a href="/intl/en-gb/test-components">Link to another page (even though its the same page currently)</a>

</p>

<p> THIS IS THE END OF DUMMY1 COMPONENT</p>

                </div>
            </div>
        );
    }
}

export default Dummy1;
