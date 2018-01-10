import React from 'react';

class GlobalFooter__Nav__Item extends React.Component {
    render() {

        return (
            <li>
                <a href={this.props.path}>{this.props.title}</a>
            </li>
        );
    }
}

GlobalFooter__Nav__Item.defaultProps = {
    title: "Footer Nav Item",
    path: "#"
}

export default GlobalFooter__Nav__Item;
