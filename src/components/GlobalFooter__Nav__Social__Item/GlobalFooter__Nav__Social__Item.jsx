import React from 'react';
// import socialFb from '../../images/icons/Icon_Facebook.svg';

class GlobalFooter__Nav__Social__Item extends React.Component {
    render() {
        let obj=this.props.socialObj;
        console.log(obj);
        return (
            <li>
                <a href={obj.path} title={`${obj.socialVerb} us on ${obj.socialTitle}`}>
                    <span className={`icon ${obj.socialIcon}`}>
                        <img src="https://via.placeholder.com/40x40"/>
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
