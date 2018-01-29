import React from 'react';

class Dummy2 extends React.Component {
    render() {

        return (
            <div className="breadcrumbs">
                <div className="l-padding">

                <p> THIS IS THE START OF DUMMY2 COMPONENT</p>


<p>This is dummy2.jsx component and can be completely different to dummy1.jsx:  </p>



<h1>{this.props['content-header-title']}</h1>
<p>{this.props['content-header-strapline']}</p>

<p>
(change the link to see how it works with another API) 
<a href="/intl/en-gb/test-components">Link to another page (even though its the same page currently)</a>

</p>


<p> THIS IS THE END OF DUMMY2 COMPONENT</p>

                </div>
            </div>
        );
    }
}

export default Dummy2;
