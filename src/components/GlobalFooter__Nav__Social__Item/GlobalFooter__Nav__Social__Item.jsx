import React from 'react';

class GlobalFooter__Nav__Social__Item extends React.Component {
    render() {
        let obj=this.props.socialObj;
        return (
            <li>
                <a href={obj.path} title={`${obj.socialVerb} us on ${obj.socialTitle}`}>
                    <span className={`icon ${obj.socialIcon}`}>

                    </span>
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
