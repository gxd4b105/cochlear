import React from 'react';

class GlobalFooter__Nav extends React.Component {
    render() {

        const children = this.props.children;

        return (
            <li>
                <div className="h2"><a href={this.props.path}>{this.props.title}</a></div>

                <ul>
                    {React.Children.map(children, (child) => {
                        return  child
                    })}
                </ul>
            </li>
        );
    }
}

GlobalFooter__Nav.defaultProps = {
    title: "Footer Title",
    path: "#"
}

export default GlobalFooter__Nav;
