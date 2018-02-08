import React from 'react';

class Cm08ChildListingItem extends React.Component {
    render () {
        return (

            <li>
                <a className='link-caret-block' href={`${this.props.path}`}>
                    {this.props.title}
                </a>
            </li>

        );
    }
}

Cm08ChildListingItem.defaultProps = {
    title: "CM08 Child Listing Item",
    path: "#"
}

export default Cm08ChildListingItem;
