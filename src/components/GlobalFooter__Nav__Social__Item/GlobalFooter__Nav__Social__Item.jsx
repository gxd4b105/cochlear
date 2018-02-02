import React from 'react';

class GlobalFooter__Nav__Social__Item extends React.Component {
    render() {

        return (
            <li>
                <a href={this.props.path} title={`${this.props.socialVerb} us on ${this.props.socialTitle}`}>
                    <span className={`icon ${this.props.socialIcon}`} data-grunticon-embed></span>
                </a>
            </li>
        );
    }
}

GlobalFooter__Nav__Social__Item.defaultProps = {
    socialVerb: "Talk to",
    socialTitle: "Socials",
    socialIcon: "facebook",
    path: "#"
}

export default GlobalFooter__Nav__Social__Item;
