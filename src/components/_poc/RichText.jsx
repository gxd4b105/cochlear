import React from 'react';

class RichText extends React.Component {
    render() {

        return (

            <div style={{border: "1px dotted", marginBottom: 20}}>
            <div className="breadcrumbs">
                <div className="l-padding">

                <p> THIS IS THE START OF Richtext COMPONENT</p>





<h1 dangerouslySetInnerHTML={{ __html: this.props['cm01-richtext-02']}}></h1>

<p>
(change the link to see how it works with another API) 
<a href="/intl/en-gb/test-components">Link to another page (even though its the same page currently)</a>

</p>


<p> THIS IS THE END OF RichText COMPONENT</p>

                </div>
            </div>
            </div>
        );
    }
}

export default RichText;
