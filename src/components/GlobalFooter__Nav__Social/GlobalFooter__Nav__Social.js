import React from 'react';

class GlobalFooter__Nav__Social extends React.Component {
    render() {

        const children = this.props.children;

        return (
            <li className="nav-footer-social link-icons-disabled">
                <h2>Connect with us</h2>

                <ul>
                    {React.Children.map(children, (child) => {
                        return  child
                    })}
                </ul>

            </li>
        );
    }
}

export default GlobalFooter__Nav__Social;
