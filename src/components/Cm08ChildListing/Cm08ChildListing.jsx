import React from 'react';

class Cm08ChildListing extends React.Component {
    render () {

        const children = this.props.children

        return (
            <div className='cm cm-child-listing'>
                <div className='title'>
                    <h2><a href={`${this.props.path}`}>{this.props.title}</a></h2>
                    {/* <% if vars[:description] != '' %> */}
                    <p>{this.props.description}</p>
                    {/* <% end %> */}
                </div>
                {/* <% if vars[:pages].length > 0 %>*/}
                <ul>
                    {React.Children.map(children, (child) => {
                        return  child
                    })}
                </ul>
                {/* <% end %> */}
            </div>

        );
    }
}

Cm08ChildListing.defaultProps = {
    title: "CM08 Child Listing",
    path: "#",
    description:"Aliquam eget ornare nisl. Pellentesque varius magna eu sodales fringilla. Nam feugiat tincidunt orci fringilla pharetra. Aenean a turpis in nunc commodo posuere. Nullam molestie velit leo.",
    image: "/assets/img/placeholder/landing-hero.jpg",
    imageAlt: "Landing page banner alt text"
}

export default Cm08ChildListing;
