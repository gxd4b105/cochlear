import React from 'react';

class GlobalFooter__Nav__Item extends React.Component {
    render() {
        let prop= this.props.propObj;

        return (
            <li>
                <a href={prop.path}>{prop.title}</a>
            </li>
        );
    }
}

GlobalFooter__Nav__Item.defaultProps = {
    title: "Footer Nav Item",
    path: "#"
}

export default GlobalFooter__Nav__Item;
